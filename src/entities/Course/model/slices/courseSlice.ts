import { createEntityAdapter, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { SortOrder } from '@/shared/types/sort';
import { Course } from '../../model/types/course';
import { CourseCategoryType, CourseSortField, CourseType, CourseView } from '../../model/consts/courseConsts';
import { CoursesSchema } from '../types/CoursesSchema';
import { fetchCoursesList } from '../../model/services/fetchCoursesList/fetchCoursesList';

export const getCoursesFilterByCategory = (courses: Course[], filterParam: CourseCategoryType) => {
    return courses.filter((entity) => entity.category === filterParam);
}

const coursesAdapter = createEntityAdapter<Course>({
    selectId: (course) => course.id,
});

export const getCourses = coursesAdapter.getSelectors<StateSchema>(
    (state) => state.course || coursesAdapter.getInitialState(),
);

const courseSlice = createSlice({
    name: 'courseSlice',
    initialState: coursesAdapter.getInitialState<CoursesSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: CourseView.SMALL,
        page: 1,
        hasMore: true,
        _inited: false,
        limit: 100,
        sort: CourseSortField.CREATED,
        search: '',
        order: 'asc',
        type: CourseType.ALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<CourseView>) => {
            state.view = action.payload;
            // TODO: Own keys
            // localStorage.setItem(
            //     ARTICLES_VIEW_LOCALSTORAGE_KEY,
            //     action.payload,
            // );
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<CourseSortField>) => {
            state.sort = action.payload;
        },
        setType: (state, action: PayloadAction<CourseType>) => {
            state.type = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(
                ARTICLES_VIEW_LOCALSTORAGE_KEY,
            ) as CourseView;
            state.view = view;
            state.limit = view === CourseView.BIG ? 100 : 100;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoursesList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;

                if (action.meta.arg.replace) {
                    coursesAdapter.removeAll(state);
                }
            })
            .addCase(fetchCoursesList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;

                if (action.meta.arg.replace) {
                    coursesAdapter.setAll(state, action.payload);
                } else {
                    coursesAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchCoursesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: coursesReducer, actions: coursesActions } =
    courseSlice;
