import { useEffect, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, LOCAL_STORAGE_SIDEBAR_STATE } from '@/shared/const/localstorage';
import { Theme } from '@/shared/const/theme';

export interface LocalStorageValues {
    storageTheme: Theme;
    sidebarState: string;
}

export const useLocalStorage = () => {
    const [storageTheme, setStorageTheme] = useState<Theme>(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.DARK);
    const [sidebarState, setStorageSidebarState] = useState<String>(localStorage.getItem(LOCAL_STORAGE_SIDEBAR_STATE) || 'false');

    useEffect(() => {
        // TODO: this decision is not working, but bad solving bottom with long pooling is bad
        // window.addEventListener('storage', () => {
        //     console.log("Change to local storage!");
        // });
        const interval = setInterval(() => {
            const currentValueTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.DARK;
            if (currentValueTheme !== storageTheme) {
                setStorageTheme(currentValueTheme);
            }
            const currentValueSidebarState = localStorage.getItem(LOCAL_STORAGE_SIDEBAR_STATE) || "false";
            if (currentValueSidebarState !== sidebarState) {
                setStorageSidebarState(currentValueSidebarState);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [storageTheme, sidebarState]);

    return {storageTheme, sidebarState};
};