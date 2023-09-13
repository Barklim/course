import { EntityState } from '@reduxjs/toolkit';
import {
    Course,
    CourseView,
    CourseSortField,
    CourseType
} from '@/entities/Course';
import { SortOrder } from '@/shared/types/sort';

export interface CoursesAllSchema {
    isLoading: boolean;
    error?: string;
    data?: Course[];
}

export interface CoursesSchema extends EntityState<Course> {
    isLoading?: boolean;
    error?: string;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    // filters
    view: CourseView;
    order: SortOrder;
    sort: CourseSortField;
    search: string;
    type: CourseType;

    _inited: boolean;
}
