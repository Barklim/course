import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchEvents } from '../services/fetchEvents/fetchEvents';
import { EventsSchema } from '../types/EventsSchema';
import { Event } from '@/entities/Event';

const initialState: EventsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvents.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchEvents.fulfilled,
                (state, {payload}: PayloadAction<Event[]>) => {
                    state.isLoading = false;
                    state.data = payload;
                },
            )
            .addCase(fetchEvents.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: eventReducer } = eventSlice;
