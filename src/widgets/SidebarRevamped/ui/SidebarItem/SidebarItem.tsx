import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/revamped/Icon';

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
            <Icon width={20} height={20} Svg={item.Icon} isActive={isActive} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});
