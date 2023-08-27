import React from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Carousel.module.scss';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/revamped/Text';
import { Button } from '@/shared/ui/revamped/Button';
import { Icon } from '@/shared/ui/revamped/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import {
    CourseCard,
    CourseListDataProvider,
    getCourseData,
} from '@/entities/Course';
import { useSelector } from 'react-redux';
import { getCourseIsLoading } from '@/entities/Course/model/selectors/course';
import { Carousel } from '@/shared/ui/revamped/Carousel';

export const CarouselAcademy = () => {
    const { t } = useTranslation('community');
    const courses = useSelector(getCourseData);
    const loading = useSelector(getCourseIsLoading);

    return (
        <CourseListDataProvider>
            <div className={cls.carouselWrapper}>
                <HStack align="end" justify="between" className={cls.header}>
                    <Text selectNone title={t('Academy')} fontSize={24} />
                    <Button variant="borderNone" fontSize={14} className={cls.seeAll} addonRight={
                        <Icon
                            data-testid="carousel-see-all"
                            className={cls.seeAllIcon}
                            Svg={ArrowIcon}
                            color={'#8D5DDA'}
                        />
                    }>{t('See all')}</Button>
                </HStack>
                <div className={cls.sliderWrapper}>
                    <Carousel items={courses} loading={loading} eventCard={CourseCard} />
                </div>
            </div>
        </CourseListDataProvider>
    );
};
