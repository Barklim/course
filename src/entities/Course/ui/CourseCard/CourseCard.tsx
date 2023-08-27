import { memo, useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/revamped/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import cls from './CourseCard.module.scss';
import { Course } from '../../model/types/course';
import { getRouteProfile } from '@/shared/const/router';
import { Card } from '@/shared/ui/redesigned/Card';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Theme } from '@/shared/const/theme';
import { Button } from '@/shared/ui/revamped/Button';
import { useTranslation } from 'react-i18next';

export interface CourseCardProps {
    className?: string;
    item?: Course;
    isLoading?: boolean;
    cardColor?: string;
}

export const CourseCard = memo((props: CourseCardProps) => {
    const { className, item, isLoading, cardColor } = props;
    const { t } = useTranslation('');
    const course = item;

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
                    data-testid="CourseCard.Content"
                    max
                    className={classNames(cls.CourseCardRedesigned, {}, [
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

    if (!course) {
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
                data-testid="CourseCard.Content"
                max
                className={classNames(cls.CourseCardRedesigned, {}, [
                    className,
                ])}
            >
                <HStack justify="between" className={cls.Header}>
                    <AppLink to={getRouteProfile(course.user.id)} >
                        <HStack gap="8" >
                            {course.user.avatar ? (
                                <Avatar
                                    size={40}
                                    src={course.user.avatar}
                                />
                            ) : null}
                            <Text text={`${course.user.first} ${course.user.lastName}`} color='#fff' />
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
                        <Text bold text={String(course.price)} color={"#fff"}></Text>
                    </Button>
                </HStack>

                <Text
                    title={course.title}
                    size="m"
                    color='#fff'
                    lineHeight='24px'
                    className={cls.Title}
                />

                <HStack className={cls.Participants}>
                    <Text size="s" text={`${t('Participants')}:`} color={"rgba(242, 241, 243, 0.50)"} />
                    &nbsp;
                    {/*<Text size="s" text={`${String(course.participants)}`} color={"#fff"} />*/}

                    <Text title=" ·  " bold color={"#fff"} />
                    <Text size="s" text={`${t('Sold out')}:`} color={"rgba(242, 241, 243, 0.50)"} />
                    &nbsp;
                    {/*<Text size="s" text={`${String(course.soldOut)}`} color={"#fff"} />*/}
                    <Text size="s" fontSize={12} title="%" bold color={"#fff"} />
                </HStack>
                <HStack justify="between" className={cls.Bottom}>
                    <HStack>
                        {/*<Text size="s" text={`${course.dayDate}:`} color={"rgba(242, 241, 243, 0.50)"} />*/}
                        &nbsp;
                        {/*<Text size="s" text={`${course.timeDate}`} color={"#fff"} />*/}
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
