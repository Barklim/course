import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Circle } from '@/shared/ui/revamped/Gsap';

const HistoryPage = () => {
    const { t } = useTranslation('history');

    return <Page data-testid="HistoryPage">
        {t('history page')}
        <Circle id='5items' loading={false} items={undefined} pointCount={5} radius={125}/>
        <Circle id='4items' loading={false} items={undefined} pointCount={4} radius={175}/>
    </Page>;
};

export default HistoryPage;
