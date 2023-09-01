import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { CarouselCourse } from '@/features/CarouselCourse';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { CourseView } from '@/entities/Course/model/consts/courseConsts';
import { FilteredHeader } from '@/features/filteredHeader';
import { AppRoutes } from '@/shared/const/router';

const AcademyPage = () => {
    const { t } = useTranslation('');

    const renderCarouselCourse = (headerText: string) => (
        <CarouselCourse
            header={t(headerText)}
            textColorByTheme={'normal'}
            play={false}
            draggable
            courseView={CourseView.BIG}
            page={AppRoutes.ACADEMY}
        />
    );

    return <Page data-testid="AcademyPage">
        <FilteredHeader />
        <VStack max gap={'46'}>
            {renderCarouselCourse('New Playlist')}
            {renderCarouselCourse('Trending')}
            {renderCarouselCourse('Watch later')}
        </VStack>
    </Page>;
};

export default AcademyPage;
