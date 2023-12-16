import React from 'react';
import { Page } from '@/widgets/Page';
import { HistoryAssemble, HistoryGsapList } from '@/features/history';

const HistoryPage = () => {
    return <Page data-testid="HistoryPage">
        <HistoryAssemble/>
        <HistoryGsapList/>
    </Page>;
};

export default HistoryPage;
