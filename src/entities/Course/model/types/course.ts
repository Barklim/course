import { User } from '@/entities/User';
import { CourseType, Content } from '@/entities/Course/model/consts/courseConsts';

export interface Course {
    id: string;
    user: User;
    img: string;
    title: string;
    price: string;
    viewers: number;
    startDate: string;
    endDate: string;
    createdAt: string;
    earn?: string;
    type: CourseType[];
    content: Content[]
}
