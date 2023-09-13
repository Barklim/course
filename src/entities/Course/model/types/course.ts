import { User } from '@/entities/User';
import { CourseType, Content, CourseCategoryType } from '@/entities/Course/model/consts/courseConsts';

export interface Course {
    id: string;
    user: User;
    img: string;
    swipeImg: string;
    swipeTitle: string;
    title: string;
    price: string;
    viewers: number;
    startDate: string;
    endDate: string;
    createdAt: string;
    earn?: string;
    type: CourseType[];
    category: CourseCategoryType;
    content: Content[]
}
