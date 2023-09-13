import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { CourseSortField, CourseType } from '@/entities/Course';
import { SortOrder } from '@/shared/types/sort';
import { getCourseInited } from '../../selectors/course';
import { coursesActions } from '../../slices/courseSlice';
import { fetchCoursesList } from '../fetchCoursesList/fetchCoursesList';

export const initCourses = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
    >('courses/initCourses', async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getCourseInited(getState());

    if (!inited) {
        const orderFromUrl = searchParams.get('order') as SortOrder;
        const sortFromUrl = searchParams.get('sort') as CourseSortField;
        const searchFromUrl = searchParams.get('search');
        const typeFromUrl = searchParams.get('type') as CourseType;

        if (orderFromUrl) {
            dispatch(coursesActions.setOrder(orderFromUrl));
        }
        if (sortFromUrl) {
            dispatch(coursesActions.setSort(sortFromUrl));
        }
        if (searchFromUrl) {
            dispatch(coursesActions.setSearch(searchFromUrl));
        }
        if (typeFromUrl) {
            dispatch(coursesActions.setType(typeFromUrl));
        }

        dispatch(coursesActions.initState());
        dispatch(fetchCoursesList({}));
    }
});
