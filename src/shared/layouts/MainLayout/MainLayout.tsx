import React, { memo, ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainLayout.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';

interface MainLayoutProps {
    className?: string;
    header?: ReactElement;
    content: ReactElement;
    sidebar: ReactElement;
    toolbar?: ReactElement;
    forelock?: boolean;
}

export const MainLayout = memo((props: MainLayoutProps) => {
    const { className, content, toolbar, header, sidebar, forelock } = props;

    return (
        <ToggleFeatures
            feature="isAppRevamped"
            on={
                <div className={classNames(cls.MainLayout, {
                    [cls.layoutWithToolbar]: !toolbar,
                })}>
                    <div className={cls.contentWrapper}>
                        { forelock ? <>
                            <div className={cls.forelock}>{forelock}</div>
                            <div className={cls.forelock2}>{forelock}</div>
                        </> : null }
                        <div className={cls.content}>{content}</div>
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
