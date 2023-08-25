import { memo } from 'react';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchEvents } from '@/entities/Event/model/services/fetchEvents/fetchEvents';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { eventReducer } from '@/entities/Event/model/slices/eventSlice';

interface EventListProps {
    children?: any;
}

export const EventListDataProvider = memo((props: EventListProps) => {
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchEvents());
    });

    const reducers: ReducersList = {
        event: eventReducer,
    };

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            {props.children}
        </DynamicModuleLoader>
    );
});
