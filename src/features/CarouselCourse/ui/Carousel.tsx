import React from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Carousel.module.scss';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/revamped/Text';
import { Button } from '@/shared/ui/revamped/Button';
import { Icon } from '@/shared/ui/revamped/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { CourseCard, CourseListDataProvider } from '@/entities/Course';
import { getCourses, getCoursesFilterByCategory } from '@/entities/Course/model/slices/courseSlice';
import { CourseCategoryType, CourseView } from '@/entities/Course/model/consts/courseConsts';
import { useSelector } from 'react-redux';
import { getCourseIsLoading } from '@/entities/Course/model/selectors/course';
import { Carousel } from '@/shared/ui/revamped/Carousel';
import { AppRoutes, getRouteSwipe } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/redesigned/AppLink';

interface CarouselProps {
    play?: boolean;
    header: string;
    page: AppRoutes;
    colorTitle?: string;
    colorHeader?: string;
    draggable?: boolean;
    category?: CourseCategoryType;
    courseView?: CourseView;
}

export const CarouselCourse:  React.FC<CarouselProps> = ({
    play,
    header ,
    page,
    draggable,
    category,
    courseView = CourseView.SMALL
}) => {
    const { t } = useTranslation('community');
    const coursesAll = useSelector(getCourses.selectAll);
    const courses = getCoursesFilterByCategory(coursesAll, category as CourseCategoryType)
    const loading = useSelector(getCourseIsLoading);

    const getColor = (page: AppRoutes) => {
        return page === AppRoutes.COMMUNITY || page === AppRoutes.MAIN ? 'purple' : 'normal';
    }

    return (
        <CourseListDataProvider>
            <div className={cls.carouselWrapper}>
                <HStack align="end" justify="between" className={cls.header}>
                    <Text selectNone title={header} textColorByTheme={getColor(page)} fontSize={24} />
                    <AppLink to={getRouteSwipe()}>
                        <Button
                            variant="borderNone"
                            fontSize={14}
                            className={cls.seeAll}
                            textColorByTheme={getColor(page)}
                            addonRight={
                            <Icon
                                data-testid="carousel-see-all"
                                className={cls.seeAllIcon}
                                Svg={ArrowIcon}
                                textColorByTheme={getColor(page)}
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
