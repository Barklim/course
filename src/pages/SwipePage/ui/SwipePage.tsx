import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Swiper } from '@/features/swiper';


const SwipePage = () => {
    const { t } = useTranslation('swipe');

    return <Page data-testid="SwipePage">
        {t('Swipe')}
        <Swiper />
    </Page>;
};

export default SwipePage;
