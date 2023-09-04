import { AppRoutes } from '@/shared/const/router';
import { useRouteChange } from '@/shared/lib/router/useRouteChange';
import React from 'react';

export function useAppFullWidth() {
    const appRoute = useRouteChange();

    const toolbarByAppRoute: OptionalRecord<AppRoutes, boolean> = {
        [AppRoutes.SWIPE]: true,
    };

    return toolbarByAppRoute[appRoute];
}
