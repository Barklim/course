import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/revamped/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import cls from './CourseCard.module.scss';
import { Course } from '../../model/types/course';
import { Card } from '@/shared/ui/redesigned/Card';
import { Button } from '@/shared/ui/revamped/Button';
import { useTranslation } from 'react-i18next';
import { Icon } from '@/shared/ui/revamped/Icon';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import Academy from '@/shared/assets/icons/academy.svg';

const coinUrl = 'https://raw.githubusercontent.com/Barklim/course/76e32b645ad404f3069bc0c96d2e37d9f6245792/hostImg/coin.svg'

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
                borderRadius={'16'}
                fullWidth
                fullHeight
                className={cls.card}
            >
                <VStack
                    data-testid="CourseCard.Content"
                    justify={'between'}
                    className={classNames(cls.cardInner, {}, [
                        className,
                    ])}
                >
                    <HStack justify="between" className={cls.header}>
                        <Skeleton width={75} height={30} border={'15px'} />

                        <div className={cls.academyIcon}>
                            <Skeleton width={30} height={30} border={'30px'} />
                        </div>
                    </HStack>

                    <VStack gap='8' className={cls.bottom}>
                        <Skeleton width={125} height={20} border={'15px'}  />
                        <Skeleton width={95} height={20} border={'15px'}  />
                    </VStack>

                </VStack>
            </Card>
        );
    }

    if (!course) {
        return null;
    }

    return (
        <Card
            borderRadius={'16'}
            bgImage={course.img}
            fullWidth
            fullHeight
            className={cls.card}
        >
            <div className={cls.cardBackGradient}></div>
            <VStack
                data-testid="CourseCard.Content"
                justify={'between'}
                className={classNames(cls.cardInner, {}, [
                    className,
                ])}
            >
                <HStack justify="between" className={cls.header}>
                    <Button
                        variant={'filled'}
                        height={30}
                        className={cls.earnButton}
                        dark
                        padding={'5px 6px'}
                        fontSize={12}
                        addonLeft={
                            <AppImage
                                src={coinUrl}
                                className={cls.firstCoin}
                            />
                        }
                    >
                        <Text color={'#fff'} title={`${t('Earn')} ${course.earn}T`} fontSize={12} />
                    </Button>
                    <div className={cls.academyIcon}>
                        <Icon
                            Svg={Academy}
                            width={18}
                            height={18}
                            setActive
                            color={'#fff'}
                        />
                    </div>
                </HStack>

                <Text text={course.title} color={'#fff'} className={cls.bottom} />
            </VStack>
        </Card>
    );
});