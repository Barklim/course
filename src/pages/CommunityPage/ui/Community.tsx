import React from 'react';
import { Page } from '@/widgets/Page';
import { BannerCourse } from '@/features/bannerCourse';
import { Carousel } from '@/features/CarouselEvents';

const Community = () => {
    return (
        <Page data-testid="Community">
            <BannerCourse />
            <Carousel />
        </Page>
    );
};

export default Community;
