import { AppRoutes } from '@/shared/const/router';
import { useRouteChange } from '@/shared/lib/router/useRouteChange';
import React from 'react';

export function useAppSpecTheme() {
    const appRoute = useRouteChange();

    const specThemeRoute: OptionalRecord<AppRoutes, boolean> = {
        [AppRoutes.SWIPE]: true,
        [AppRoutes.HISTORY]: true
    };

    return specThemeRoute[appRoute];
}
