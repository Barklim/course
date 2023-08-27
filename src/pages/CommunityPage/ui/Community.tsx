import React from 'react';
import { Page } from '@/widgets/Page';
import { BannerCourse } from '@/features/bannerCourse';
import { Banner as BannerEarnings } from '@/features/bannerEarnings';
import { CarouselEvents } from '@/features/CarouselEvents';
import { CarouselAcademy } from '@/features/CarouselAcademy';

const Community = () => {
    return (
        <Page data-testid="Community">
            <BannerCourse />
            <CarouselEvents />
            <BannerEarnings />
            <CarouselAcademy />
        </Page>
    );
};

export default Community;
