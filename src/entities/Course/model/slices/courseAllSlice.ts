import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllCourses } from '../services/fetchAllCourses/fetchAllCourses';
import { CoursesAllSchema } from '../types/CoursesSchema';
import { Course } from '@/entities/Course';

const initialState: CoursesAllSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const courseAllSlice = createSlice({
    name: 'courseAll',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllCourses.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchAllCourses.fulfilled,
                (state, {payload}: PayloadAction<Course[]>) => {
                    state.isLoading = false;
                    state.data = payload;
                },
            )
            .addCase(fetchAllCourses.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: courseReducer } = courseAllSlice;
