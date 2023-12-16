import { lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { HistoryAssembledProps } from './HistoryAssembled';

const HistoryAssembledLazy = lazy(() => import('./HistoryAssembled'));

export const HistoryAssembleAsync = (props: HistoryAssembledProps) => {
    return (
        <Suspense fallback={<Skeleton width="100%" height={140} />}>
            <HistoryAssembledLazy {...props} />
        </Suspense>
    );
};
