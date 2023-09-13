import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { CarouselCourse } from '@/features/CarouselCourse';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { CourseCategoryType, CourseView } from '@/entities/Course/model/consts/courseConsts';
import { FilteredHeader } from '@/features/filteredHeader';
import { AppRoutes } from '@/shared/const/router';

const AcademyPage = () => {
    const { t } = useTranslation('');

    const renderCarouselCourse = (headerText: string, category: CourseCategoryType) => (
        <CarouselCourse
            header={t(headerText)}
            play={false}
            draggable
            courseView={CourseView.BIG}
            page={AppRoutes.ACADEMY}
            category={category}
        />
    );

    return <Page data-testid="AcademyPage">
        <FilteredHeader />
        <VStack max gap={'46'}>
            {renderCarouselCourse('New Playlist', CourseCategoryType.NEW)}
            {renderCarouselCourse('Trending', CourseCategoryType.TRENDING)}
            {renderCarouselCourse('Watch later', CourseCategoryType.FEATURED)}
        </VStack>
    </Page>;
};

export default AcademyPage;
