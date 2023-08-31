import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { CarouselCourse } from '@/features/CarouselCourse';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { CourseView } from '@/entities/Course/model/consts/courseConsts';

const AcademyPage = () => {
    const { t } = useTranslation('');

    return <Page data-testid="AcademyPage">
        <VStack max gap={'46'}>
            <CarouselCourse header={t('New Playlist')} colorHeader={'#fff'} play={false} courseView={CourseView.BIG} />
            <CarouselCourse header={t('Trending')} colorHeader={'#fff'} play={false} courseView={CourseView.BIG} />
            <CarouselCourse header={t('Watch later')} colorHeader={'#fff'} play={false} courseView={CourseView.BIG} />
        </VStack>
    </Page>;
};

export default AcademyPage;
