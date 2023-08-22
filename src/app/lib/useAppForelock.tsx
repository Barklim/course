import { AppRoutes } from '@/shared/const/router';
import { useRouteChange } from '@/shared/lib/router/useRouteChange';
import React from 'react';

export function useAppForelock() {
    const appRoute = useRouteChange();

    const toolbarByAppRoute: OptionalRecord<AppRoutes, boolean> = {
        [AppRoutes.MAIN]: true,
        [AppRoutes.ARTICLES]: true,
        [AppRoutes.ARTICLE_DETAILS]: true,
        [AppRoutes.PROFILE]: true,
    };

    return toolbarByAppRoute[appRoute];
}
