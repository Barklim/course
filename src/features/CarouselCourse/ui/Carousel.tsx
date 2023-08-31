import React from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Carousel.module.scss';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/revamped/Text';
import { Button } from '@/shared/ui/revamped/Button';
import { Icon } from '@/shared/ui/revamped/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { CourseCard, CourseListDataProvider, getCourseData } from '@/entities/Course';
import { CourseView } from '@/entities/Course/model/consts/courseConsts';
import { useSelector } from 'react-redux';
import { getCourseIsLoading } from '@/entities/Course/model/selectors/course';
import { Carousel } from '@/shared/ui/revamped/Carousel';
import { getRouteWatch } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/redesigned/AppLink';

interface CarouselProps {
    play?: boolean;
    header: string;
    colorHeader?: string;
    courseView?: CourseView;
    draggable?: boolean;
}

export const CarouselCourse:  React.FC<CarouselProps> = ({
    play,
    header ,
    colorHeader,
    draggable,
    courseView = CourseView.SMALL
}) => {
    const { t } = useTranslation('community');
    const courses = useSelector(getCourseData);
    const loading = useSelector(getCourseIsLoading);

    return (
        <CourseListDataProvider>
            <div className={cls.carouselWrapper}>
                <HStack align="end" justify="between" className={cls.header}>
                    <Text selectNone title={header} fontSize={24} />
                    <AppLink to={getRouteWatch()}>
                        <Button
                            variant="borderNone"
                            fontSize={14}
                            className={cls.seeAll}
                            fontColor={colorHeader ? colorHeader : '#8D5DDA'}
                            addonRight={
                            <Icon
                                data-testid="carousel-see-all"
                                className={cls.seeAllIcon}
                                Svg={ArrowIcon}
                                color={colorHeader ? colorHeader : '#8D5DDA'}
                            />
                        }>{t('See all')}</Button>
                    </AppLink>
                </HStack>
                <div className={cls.sliderWrapper} style={{ height: courseView === CourseView.SMALL ? '222px' : '342px' }}>
                    <Carousel
                        courseView={courseView}
                        items={courses}
                        loading={loading}
                        draggable={draggable}
                        eventCard={CourseCard}
                        play={play}
                    />
                </div>
            </div>
        </CourseListDataProvider>
    );
};
