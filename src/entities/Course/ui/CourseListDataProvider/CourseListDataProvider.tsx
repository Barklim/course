import { memo } from 'react';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { coursesReducer } from '@/entities/Course/model/slices/courseSlice';
import { initCourses } from '@/entities/Course/model/services/initCourses/initCourses';
import { useSearchParams } from 'react-router-dom';

interface EventListProps {
    children?: any;
}

export const CourseListDataProvider = memo((props: EventListProps) => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initCourses(searchParams));
    });

    const reducers: ReducersList = {
        course: coursesReducer,
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            {props.children}
        </DynamicModuleLoader>
    );
});
