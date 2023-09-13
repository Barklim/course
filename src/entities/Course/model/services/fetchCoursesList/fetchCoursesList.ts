import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Course } from '@/entities/Course';
import { CourseType } from '../../consts/courseConsts';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
import {
    getCourseLimit,
    getCourseNum,
    getCourseOrder,
    getCourseSearch,
    getCourseSort,
    getCourseType,
} from '../../selectors/course';

interface FetchCoursesListProps {
    replace?: boolean;
}

export const fetchCoursesList = createAsyncThunk<
    Course[],
    FetchCoursesListProps,
    ThunkConfig<string>
    >('courses/fetchCoursesList', async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const limit = getCourseLimit(getState());
    const sort = getCourseSort(getState());
    const order = getCourseOrder(getState());
    const search = getCourseSearch(getState());
    const page = getCourseNum(getState());
    const type = getCourseType(getState());

    try {
        addQueryParams({
            sort,
            order,
            search,
            type,
        });
        const response = await extra.api.get<Course[]>('/courses', {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page,
                _sort: sort,
                _order: order,
                q: search,
                type: type === CourseType.ALL ? undefined : type,
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
