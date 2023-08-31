import React from 'react';
import { Page } from '@/widgets/Page';
import { BannerCourse } from '@/features/bannerCourse';
import { Banner as BannerEarnings } from '@/features/bannerEarnings';
import { CarouselEvents } from '@/features/CarouselEvents';
import { CarouselCourse } from '@/features/CarouselCourse';
import { useTranslation } from 'react-i18next';
import cls from './CommunityPage.module.scss';
import { CourseView } from '@/entities/Course/model/consts/courseConsts';

const CommunityPage = () => {
    const { t } = useTranslation('');

    return (
        <Page data-testid="Community" className={cls.bottomMargin}>
            <BannerCourse />
            <CarouselEvents />
            <BannerEarnings />
            <CarouselCourse header={t('Academy')} play={true} courseView={CourseView.SMALL}/>
        </Page>
    );
};

export default CommunityPage;
