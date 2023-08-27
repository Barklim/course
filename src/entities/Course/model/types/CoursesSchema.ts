import { Course } from '@/entities/Course';

export interface CoursesSchema {
    isLoading: boolean;
    error?: string;
    data?: Course[];
}
