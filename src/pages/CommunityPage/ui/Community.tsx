import React from 'react';
import { Page } from '@/widgets/Page';
import { BannerCourse } from '@/features/bannerCourse';
import { Banner as BannerEarnings } from '@/features/bannerEarnings';
import { CarouselEvents as Carousel } from '@/features/CarouselEvents';

const Community = () => {
    return (
        <Page data-testid="Community">
            <BannerCourse />
            <Carousel />
            <BannerEarnings />
        </Page>
    );
};

export default Community;
