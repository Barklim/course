import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';
import { AppLink } from '@/shared/ui/revamped/AppLink';
import { Icon } from '@/shared/ui/revamped/Icon';
import { getRouteWatch } from '@/shared/const/router';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
    onClick?: any;
    isActive?: any;
}

export const SidebarItem = memo(({ item, collapsed, isActive, onClick }: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            to={item.path}
            className={classNames(cls.itemRedesigned, {
                [cls.collapsedRedesigned]: collapsed,
            })}
            activeClassName={cls.active}
            onClick={onClick}
        >
            {item.path !== getRouteWatch() ?
                <>
                    <Icon width={20} height={20} Svg={item.Icon} className={cls.sidebarIcon} isActive={isActive} />
                    <span className={cls.link}>{t(item.text)}</span>
                </>
                :
                <HStack justify='between' className={cls.watchContainer}>
                    <div className={cls.watchLeft}>
                        <Icon width={20} height={20} Svg={item.Icon} className={cls.sidebarIcon} isActive={isActive} />
                        <span className={cls.link}>{t(item.text)}</span>
                    </div>
                    <div className={cls.watchers}>2</div>
                </HStack>
            }
        </AppLink>
    );
});
