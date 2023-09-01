import React, { memo, ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainLayout.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { useLocalStorage } from '@/app/lib/useLocalStorage';
import { useLocation } from 'react-router-dom';
import { getRouteArticles } from '@/shared/const/router';

interface MainLayoutProps {
    className?: string;
    header?: ReactElement;
    content: ReactElement;
    sidebar: ReactElement;
    toolbar?: ReactElement;
    forelock?: boolean;
    fullWidth?: boolean;
}

const contentRender = ({fullWidth, collapsed, content, isOldPage} : {fullWidth: boolean, collapsed: boolean, content: any, isOldPage: boolean}) => {
    if (fullWidth) {
        if (collapsed) {
            return <div className={`${cls.contentFullWidth} ${cls.sidebarCollapsed}`}>{content}</div>
        } else {
            return <div className={`${cls.contentFullWidth} ${cls.sidebarOpen}`}>{content}</div>
        }
    } else {
        return <div
            className={cls.contentRevamp}
            style={{ width: isOldPage ? '100%' : 'calc(960px + 32px + 32px)'}}
        >{content}</div>
    }
}

export const MainLayout = memo((props: MainLayoutProps) => {
    const { className, content, toolbar, header, sidebar, forelock, fullWidth = false } = props;
    const { sidebarState } = useLocalStorage();
    const location = useLocation();
    const isOldPage = location.pathname === getRouteArticles() || location.pathname.includes('articles') || location.pathname.includes('profile')
    const collapsed = sidebarState === "false";
    const contentWrapper = fullWidth ? `${cls.contentWrapper} ${cls.fullWidthBg}` : cls.contentWrapper;

    return (
        <ToggleFeatures
            feature="isAppRevamped"
            on={
                <div className={classNames(cls.MainLayout, {
                    [cls.layoutWithToolbar]: !toolbar,
                })}>
                    <div className={contentWrapper}>
                        { forelock ? <>
                            <div className={cls.forelock}>{forelock}</div>
                            <div className={cls.forelock2}>{forelock}</div>
                        </> : null }
                        {contentRender({fullWidth, collapsed, content, isOldPage})}
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
