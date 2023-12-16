import { lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { HistoryGsapProps } from './HistoryGsap';

const HistoryGsapLazy = lazy(() => import('./HistoryGsap'));

export const HistoryGsapAsync = (props: HistoryGsapProps) => {
    return (
        <Suspense fallback={<Skeleton width="100%" height={140} />}>
            <HistoryGsapLazy {...props} />
        </Suspense>
    );
};
