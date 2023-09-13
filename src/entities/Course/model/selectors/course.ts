import { StateSchema } from '@/app/providers/StoreProvider';
import { CourseSortField, CourseType, CourseView } from '../consts/courseConsts';
import { buildSelector } from '@/shared/lib/store';

export const getCourseAllData = (state: StateSchema) =>
    state.courseAll?.data;
export const getCourseAllIsLoading = (state: StateSchema) =>
    state.courseAll?.isLoading || false;
export const getCourseAllError = (state: StateSchema) =>
    state.courseAll?.error;

export const getCourseIsLoading = (state: StateSchema) =>
    state.course?.isLoading || false;
export const getCourseError = (state: StateSchema) =>
    state.course?.error;
export const getCourseView = (state: StateSchema) =>
    state.course?.view || CourseView.SMALL;
export const getCourseNum = (state: StateSchema) =>
    state.course?.page || 1;
export const getCourseLimit = (state: StateSchema) =>
    state.course?.limit || 100;
export const getCourseHasMore = (state: StateSchema) =>
    state.course?.hasMore;
export const getCourseInited = (state: StateSchema) =>
    state.course?._inited;
export const getCourseOrder = (state: StateSchema) =>
    state.course?.order ?? 'asc';
export const getCourseSort = (state: StateSchema) =>
    state.course?.sort ?? CourseSortField.CREATED;
export const getCourseSearch = (state: StateSchema) =>
    state.course?.search ?? '';
export const getCourseType = (state: StateSchema) =>
    state.course?.type ?? CourseType.ALL;

export const [useCourseItemById] = buildSelector(
    (state, id: string) => state.course?.entities[id],
);

