import { StateSchema } from '@/app/providers/StoreProvider';

export const getCourseData = (state: StateSchema) =>
    state.course?.data;
export const getCourseIsLoading = (state: StateSchema) =>
    state.course?.isLoading || false;
export const getCourseError = (state: StateSchema) =>
    state.course?.error;
