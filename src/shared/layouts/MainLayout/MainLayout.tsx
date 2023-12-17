import React, { memo, ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainLayout.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { useLocalStorage } from '@/app/lib/useLocalStorage';
import { useLocation } from 'react-router-dom';
import { getRouteArticles, getRouteHistory, getRouteSwipe } from '@/shared/const/router';

interface MainLayoutProps {
    className?: string;
    header?: ReactElement;
    content: ReactElement;
    sidebar: ReactElement;
    toolbar?: ReactElement;
    forelock?: boolean;
    fullWidth?: boolean;
    specTheme?: boolean;
}

const contentRender = ({fullWidth, collapsed, content, isOldPage, specTheme} : {fullWidth: boolean, collapsed: boolean, content: any, isOldPage: boolean, specTheme: boolean}) => {
    const specThemeCls = specTheme ? cls.contentSpecTheme : undefined;

    if (fullWidth) {
        if (collapsed) {
            return <div className={`${cls.contentFullWidth} ${cls.sidebarCollapsed} ${specThemeCls}`}>{content}</div>
        } else {
            return <div className={`${cls.contentFullWidth} ${cls.sidebarOpen} ${specThemeCls}`}>{content}</div>
        }
    } else {
        return <div
            className={`${cls.contentRevamp}`}
            style={{ width: isOldPage ? '100%' : 'calc(960px + 32px + 32px)', maxWidth: specThemeCls ? '1460px': '1200px'}}
        >{content}</div>
    }
}

export const MainLayout = memo((props: MainLayoutProps) => {
    const { className, content, toolbar, header, sidebar, forelock, fullWidth = false, specTheme = false } = props;
    const { sidebarState } = useLocalStorage();
    const location = useLocation();
    const isOldPage = location.pathname === getRouteArticles() || location.pathname.includes('articles') || location.pathname.includes('profile')
    const collapsed = sidebarState === "false";
    const isSwipePage = location.pathname === getRouteSwipe()
    const swiperBg = isSwipePage ? cls.fullWidthBg : undefined;
    const isHistoryPage = location.pathname === getRouteHistory()
    const historyBg = isHistoryPage ? cls.specThemeBg : undefined;
    const contentWrapper = fullWidth ? `${cls.contentWrapper}` : cls.contentWrapper;

    return (
        <ToggleFeatures
            feature="isAppRevamped"
            on={
                <div className={classNames(cls.MainLayout, {
                    [cls.layoutWithToolbar]: !toolbar,
                })}>
                    <div className={classNames('', {}, [contentWrapper, swiperBg, historyBg])}>
                        { isHistoryPage ? <>
                            <div className={classNames(cls.verticalLine, {
                                [cls.verticalLineCollapsed]: collapsed
                            }, [])}></div>
                        </> : null}
                        { forelock ? <>
                            <div className={cls.forelock}>{forelock}</div>
                            <div className={cls.forelock2}>{forelock}</div>
                        </> : null }
                        {contentRender({fullWidth, collapsed, content, isOldPage, specTheme})}
                    </div>
                    <div className={cls.sidebarRevamp}>{sidebar}</div>
                    { toolbar ?
                    <div className={cls.rightbar}>
                        <div className={cls.header}>{header}</div>
                        <div className={cls.toolbar}>{toolbar}</div>
                    </div> : null }
                </div>
            }
            off={
                <div className={classNames(cls.MainLayout, {}, [className])}>
                    <div className={cls.content}>{content}</div>
                    <div className={cls.sidebar}>{sidebar}</div>
                    <div className={cls.rightbar}>
                        <div className={cls.header}>{header}</div>
                        <div className={cls.toolbar}>{toolbar}</div>
                    </div>
                </div>
            }
        />
    );
});
