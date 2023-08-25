import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { EventCard } from '../EventCard/EventCard';
import { Event } from '../../model/types/event';

interface EventListProps {
    className?: string;
    events?: Event[];
    isLoading?: boolean;
}

export const EventList = memo((props: EventListProps) => {
    const { className, isLoading, events } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <HStack gap="12" max className={classNames('', {}, [className])}>
                <EventCard isLoading />
                <EventCard isLoading />
                <EventCard isLoading />
            </HStack>
        );
    }

    return (
        <HStack gap="16" max className={classNames('', {}, [className])}>
            {events?.length ? (
                events.map((event) => (
                    <EventCard
                        isLoading={isLoading}
                        event={event}
                        key={event.id}
                    />
                ))
            ) : (
                <Text text={t('События отсутствуют')} />
            )}
        </HStack>
    );
});
