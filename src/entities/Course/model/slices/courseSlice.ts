import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCourses } from '../services/fetchCourses/fetchCourses';
import { CoursesSchema } from '../types/CoursesSchema';
import { Course } from '@/entities/Course';

const initialState: CoursesSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCourses.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchCourses.fulfilled,
                (state, {payload}: PayloadAction<Course[]>) => {
                    state.isLoading = false;
                    state.data = payload;
                },
            )
            .addCase(fetchCourses.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: courseReducer } = courseSlice;
