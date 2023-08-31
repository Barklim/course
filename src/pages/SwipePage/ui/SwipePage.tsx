import React from 'react';
import { Page } from '@/widgets/Page';
import { Swiper } from '@/features/swiper';
import cls from './SwiperPage.module.scss';


const SwipePage = () => {
    return <Page data-testid="SwipePage" className={cls.swipePage}>
        <Swiper />
    </Page>;
};

export default SwipePage;
