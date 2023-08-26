import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Event } from '../../types/event';

export const fetchEvents = createAsyncThunk<
    Event[],
    string | undefined,
    ThunkConfig<string>
>('event/fetchEvents', async ( additionalParams, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get<Event[]>(
            `/events/`,
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
