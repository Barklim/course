import React, { memo, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserInited, initAuthData } from '@/entities/User';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { Sidebar as SidebarR } from '@/widgets/SidebarRevamped';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ToggleFeatures } from '@/shared/lib/features';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { PageLoader } from '@/widgets/PageLoader';
import { useAppToolbar } from './lib/useAppToolbar';
import { useAppForelock } from '@/app/lib/useAppForelock';
import { withTheme } from './providers/ThemeProvider/ui/withTheme';
import { LOCAL_STORAGE_LAST_DESIGN_KEY, LOCAL_STORAGE_REVAMP_KEY } from '@/shared/const/localstorage';

const App = memo(() => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);
    const toolbar = useAppToolbar();
    const forelock = useAppForelock();

    useEffect(() => {
        const designKey = localStorage.getItem(LOCAL_STORAGE_REVAMP_KEY);

        if (designKey === null) {
            localStorage.setItem(
                LOCAL_STORAGE_REVAMP_KEY,
                'new'
            );
            localStorage.setItem(
                LOCAL_STORAGE_LAST_DESIGN_KEY,
                'new'
            );
            window.location.reload();
        }
    }, []);

    useEffect(() => {
        if (!inited) {
            dispatch(initAuthData());
        }
    }, [dispatch, inited]);

    if (!inited) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <div
                        id="app"
                        className={classNames('app_redesigned', {}, [theme])}
                    >
                        <AppLoaderLayout />{' '}
                    </div>
                }
                off={<PageLoader />}
            />
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRevamped"
            off={
                <ToggleFeatures
                    feature="isAppRedesigned"
                    off={
                        <div id="app" className={classNames('app', {}, [theme])}>
                            <Suspense fallback="">
                                <Navbar />
                                <div className="content-page">
                                    <Sidebar />
                                    <AppRouter />
                                </div>
                            </Suspense>
                        </div>
                    }
                    on={
                        <div
                            id="app"
                            className={classNames('app_redesigned', {}, [theme])}
                        >
                            <Suspense fallback="">
                                <MainLayout
                                    header={<Navbar />}
                                    content={<AppRouter />}
                                    sidebar={<Sidebar />}
                                    toolbar={toolbar}
                                />
                            </Suspense>
                        </div>
                    }
                />
            }
            on={
                <div
                    id="app"
                    className={classNames('app_revamped', {}, [theme])}
                >
                    <Suspense fallback="">
                        <MainLayout
                            content={<AppRouter />}
                            sidebar={<SidebarR />}
                            toolbar={toolbar}
                            forelock={forelock}
                        />
                    </Suspense>
                </div>
            }
        />
    );
});

export default withTheme(App);
