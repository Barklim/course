import React from 'react';
import { Page } from '@/widgets/Page';
import { HistoryGsapList } from '@/features/history';

const HistoryPage = () => {
    return <Page data-testid="HistoryPage">
        <HistoryGsapList/>
    </Page>;
};

export default HistoryPage;
