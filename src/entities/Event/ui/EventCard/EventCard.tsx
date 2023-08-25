import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import cls from './EventCard.module.scss';
import { Event } from '../../model/types/event';
import { getRouteProfile } from '@/shared/const/router';
import { Card } from '@/shared/ui/redesigned/Card';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

interface EventCardProps {
    className?: string;
    event?: Event;
    isLoading?: boolean;
}

export const EventCard = memo((props: EventCardProps) => {
    const { className, event, isLoading } = props;

    const Skeleton = SkeletonRedesigned;

    if (isLoading) {
        return (
            <VStack
                data-testid="EventCard.Loading"
                gap="8"
                max
                className={classNames(cls.EventCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton
                        height={16}
                        width={100}
                        className={cls.username}
                    />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </VStack>
        );
    }

    if (!event) {
        return null;
    }

    return (
        <Card padding="24" border="partial" fullWidth>
            <VStack
                data-testid="EventCard.Content"
                gap="8"
                max
                className={classNames(cls.EventCardRedesigned, {}, [
                    className,
                ])}
            >
                <AppLink to={getRouteProfile(event.user.id)}>
                    <HStack gap="8">
                        {event.user.avatar ? (
                            <Avatar
                                size={30}
                                src={event.user.avatar}
                            />
                        ) : null}
                        <Text text={event.user.username} bold />
                    </HStack>
                </AppLink>
                <Text text={event.title} />
                <Text text={String(event.price)} />
                <Text text={String(event.participants)} />
                <Text text={String(event.soldOut)} />
                <Text text={event.startDate} />
                <Text text={event.endDate} />
            </VStack>
        </Card>
    );
});
