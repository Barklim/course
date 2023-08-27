import { memo } from 'react';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { courseReducer } from '@/entities/Course/model/slices/courseSlice';
import { fetchCourses } from '@/entities/Course/model/services/fetchCourses/fetchCourses';

interface EventListProps {
    children?: any;
}

export const CourseListDataProvider = memo((props: EventListProps) => {
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCourses());
    });

    const reducers: ReducersList = {
        course: courseReducer,
    };

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            {props.children}
        </DynamicModuleLoader>
    );
});
