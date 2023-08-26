import { memo, useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/revamped/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import cls from './EventCard.module.scss';
import { Event } from '../../model/types/event';
import { getRouteProfile } from '@/shared/const/router';
import { Card } from '@/shared/ui/redesigned/Card';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Theme } from '@/shared/const/theme';
import { Button } from '@/shared/ui/revamped/Button';
import { Icon } from '@/shared/ui/redesigned/Icon';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { useTranslation } from 'react-i18next';

interface EventCardProps {
    className?: string;
    event?: Event;
    isLoading?: boolean;
    cardColor?: string;
}

export enum CardColorEnum {
    Blue = 1,
    Orange = 2,
    Red = 3,
    Green = 4,
}

export function getGradientColor(cardColor: CardColorEnum, theme?: Theme): string {
    if (theme === Theme.DARK) {
        switch (cardColor) {
            case CardColorEnum.Blue:
                return 'linear-gradient(224deg, #8D5DDA 0%, #6F28E2 100%)';
            case CardColorEnum.Orange:
                return 'linear-gradient(231deg, #EF7B3C 0%, #EF923C 100%)';
            case CardColorEnum.Red:
                return 'linear-gradient(43deg, #FF6E56 0%, #FF4D30 100%)';
            case CardColorEnum.Green:
                return 'linear-gradient(224deg, #6FD964 0%, #274c23 100%)';
            default:
                return 'linear-gradient(224deg, #8D5DDA 0%, #6F28E2 100%)';
        }
    } else if (theme === Theme.LIGHT) {
        switch (cardColor) {
            case CardColorEnum.Blue:
                return 'linear-gradient(224deg, #a789d9 0%, #8c56e3 100%)';
            case CardColorEnum.Orange:
                return 'linear-gradient(231deg, #f09a6c 0%, #f0ac6c 100%)';
            case CardColorEnum.Red:
                return 'linear-gradient(43deg, #ff9b8a 0%, #ff7863 100%)';
            case CardColorEnum.Green:
                return 'linear-gradient(224deg, #96d98f 0%, #8dcc85 100%)';
            default:
                return 'linear-gradient(224deg, #a789d9 0%, #8c56e3 100%)';
        }
    } else if (theme === Theme.ORANGE) {
        switch (cardColor) {
            case CardColorEnum.Blue:
                return 'linear-gradient(224deg, #b589d9 0%, #a456e3 100%)';
            case CardColorEnum.Orange:
                return 'linear-gradient(231deg, #f0b06c 0%, #f0c26c 100%)';
            case CardColorEnum.Red:
                return 'linear-gradient(43deg, #ffaf8a 0%, #ff9263 100%)';
            case CardColorEnum.Green:
                return 'linear-gradient(224deg, #8fd994 0%, #85cc89 100%)';
            default:
                return 'linear-gradient(224deg, #b589d9 0%, #a456e3 100%)';
        }
    }
    else {
        switch (cardColor) {
            case CardColorEnum.Blue:
                return 'linear-gradient(224deg, #8D5DDA 0%, #6F28E2 100%)';
            case CardColorEnum.Orange:
                return 'linear-gradient(231deg, #EF7B3C 0%, #EF923C 100%)';
            case CardColorEnum.Red:
                return 'linear-gradient(43deg, #FF6E56 0%, #FF4D30 100%)';
            case CardColorEnum.Green:
                return 'linear-gradient(224deg, #6FD964 0%, #274c23 100%)';
            default:
                return 'linear-gradient(224deg, #8D5DDA 0%, #6F28E2 100%)';
        }
    }
}

export const EventCard = memo((props: EventCardProps) => {
    const { className, event, isLoading, cardColor } = props;
    const { t } = useTranslation('');

    if (isLoading) {
        return (
            <Card
                padding="10"
                border="normal"
                borderRadius={'20'}
                cardColor={cardColor}
                fullWidth
                fullHeight
            >
                <VStack
                    data-testid="EventCard.Content"
                    max
                    className={classNames(cls.EventCardRedesigned, {}, [
                        className,
                    ])}
                >
                    <HStack justify="between" className={cls.Header}>
                        <AppLink to={getRouteProfile('1')} >
                            <HStack gap="8" >
                                <Skeleton height={40} width={40} border={'100px'} />
                                <Skeleton width={120} height={20} />
                            </HStack>
                        </AppLink>
                        <Skeleton width={70} height={20} />
                    </HStack>

                    <Skeleton className={cls.Title} width="80%" height={50} />

                    <HStack className={cls.Participants}>
                        <Text size="s" text={`${t('Participants')}:`} color={"rgba(242, 241, 243, 0.50)"} />
                        &nbsp;
                        <Skeleton width={40} height={16} />

                        <Text title=" ·  " bold color={"#fff"} />
                        <Text size="s" text={`${t('Sold out')}:`} color={"rgba(242, 241, 243, 0.50)"} />
                        &nbsp;
                        <Skeleton width={40} height={16} />
                        <Text size="s" fontSize={12} title="%" bold color={"#fff"} />
                    </HStack>
                    <HStack justify="between" className={cls.Bottom}>
                        <HStack>
                            <Skeleton className={cls.Title} width={40} height={16} />
                            &nbsp;
                            <Skeleton className={cls.Title} width={80} height={16} />
                        </HStack>
                        <Button
                            height={31}
                            padding="10px 14px 9px"
                            borderRadius={8}
                            fontColor="#fff"
                            fontSize={12}
                        >{t('Book Class')}</Button>
                    </HStack>
                </VStack>
            </Card>
        );
    }

    if (!event) {
        return null;
    }

    return (
        <Card
            padding="10"
            border="normal"
            borderRadius={'20'}
            cardColor={cardColor}
            fullWidth
            fullHeight
        >
            <VStack
                data-testid="EventCard.Content"
                max
                className={classNames(cls.EventCardRedesigned, {}, [
                    className,
                ])}
            >
                <HStack justify="between" className={cls.Header}>
                    <AppLink to={getRouteProfile(event.user.id)} >
                        <HStack gap="8" >
                            {event.user.avatar ? (
                                <Avatar
                                    size={40}
                                    src={event.user.avatar}
                                />
                            ) : null}
                            <Text text={`${event.user.first} ${event.user.lastName}`} color='#fff' />
                        </HStack>
                    </AppLink>
                    <Button
                        addonLeft="$"
                        variant="filled"
                        height={29}
                        fontColor={'#fff'}
                        bgColor={'rgba(255, 255, 255, 0.10)'}
                        fontWeight={700}
                        padding="6px 10px"
                    >
                        <Text bold text={String(event.price)} color={"#fff"}></Text>
                    </Button>
                </HStack>

                <Text
                    title={event.title}
                    size="m"
                    color='#fff'
                    lineHeight='24px'
                    className={cls.Title}
                />

                <HStack className={cls.Participants}>
                    <Text size="s" text={`${t('Participants')}:`} color={"rgba(242, 241, 243, 0.50)"} />
                    &nbsp;
                    <Text size="s" text={`${String(event.participants)}`} color={"#fff"} />

                    <Text title=" ·  " bold color={"#fff"} />
                    <Text size="s" text={`${t('Sold out')}:`} color={"rgba(242, 241, 243, 0.50)"} />
                    &nbsp;
                    <Text size="s" text={`${String(event.soldOut)}`} color={"#fff"} />
                    <Text size="s" fontSize={12} title="%" bold color={"#fff"} />
                </HStack>
                <HStack justify="between" className={cls.Bottom}>
                    <HStack>
                        <Text size="s" text={`${event.dayDate}:`} color={"rgba(242, 241, 243, 0.50)"} />
                        &nbsp;
                        <Text size="s" text={`${event.timeDate}`} color={"#fff"} />
                    </HStack>
                    <Button
                        height={31}
                        padding="10px 14px 9px"
                        borderRadius={8}
                        fontColor="#fff"
                        fontSize={12}
                    >{t('Book Class')}</Button>
                </HStack>
            </VStack>
        </Card>
    );
});
