import { StateSchema } from '@/app/providers/StoreProvider';

export const getEventData = (state: StateSchema) =>
    state.event?.data;
export const getEventIsLoading = (state: StateSchema) =>
    state.event?.isLoading || false;
export const getEventError = (state: StateSchema) =>
    state.event?.error;
