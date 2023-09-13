import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Course } from '../../types/course';

export const fetchAllCourses = createAsyncThunk<
    Course[],
    string | undefined,
    ThunkConfig<string>
>('course/fetchAllCourses', async ( category, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get<Course[]>(
            // `/courses?category=${category}`,
            `/courses`,
            {
                headers: { authorization: '1' },
                params: {
                    _expand: 'user',
                },
            },
        );

        if (!response.data) {
            throw new Error();
        }


        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
