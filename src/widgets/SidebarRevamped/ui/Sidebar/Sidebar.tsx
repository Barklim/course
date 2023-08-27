import React, { memo, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/features/ThemeSwitcherRevamped';
import { LangSwitcher } from '@/features/LangSwitcher';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSidebarItems } from '../../model/selectors/getSidebarItems';
import { Text } from '@/shared/ui/revamped/Text';
import { Input } from '@/shared/ui/revamped/Input';
import { Icon } from '@/shared/ui/revamped/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { NotificationButton } from '@/features/notificationButtonRevamped';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { useTranslation } from 'react-i18next';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { Navbar } from '@/widgets/Navbar';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Button } from '@/shared/ui/revamped/Button';
import Calendar from '@/shared/assets/icons/calendar.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSidebarItems();
    const { t } = useTranslation();
    const location = useLocation()
    const [activeSvgIndex, setActiveSvgIndex] = useState(location.pathname);
    const authData = useSelector(getUserAuthData);

    const handleSvgClick = (index: string) => {
        setActiveSvgIndex(index);
    };

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    item={item}
                    collapsed={collapsed}
                    key={item.path}
                    isActive={item.path === activeSvgIndex}
                    onClick={() => handleSvgClick(item.path)}
                />
            )),
        [collapsed, sidebarItemsList],
    );

    return (
        <aside
            data-testid="sidebar"
            className={classNames(
                cls.SidebarRevamped,
                { [cls.collapsedRevamped]: collapsed },
                [className],
            )}
        >
            <HStack align="start" justify="end" className={cls.actions}>
                {authData ? <NotificationButton /> : null}
                <AvatarDropdown height={30} />
                {!authData ? <Navbar /> : null}
            </HStack>
            <Input
                size="s"
                placeholder={t('Поиск')}
                addonLeft={<Icon setActive Svg={SearchIcon} />}
                className={classNames(cls.input, {}, [className])}
                collapsed={collapsed}
            />
            <Text
                size={'s'}
                text={t('MAIN')}
                minor
                textFont
                selectNone
                className={classNames(cls.title, {}, [className])}
            />
            <VStack role="navigation" gap="8" className={cls.items}>
                {itemsList}
            </VStack>
            <div className={cls.createButtonContainer}>
                <Button
                    fullWidth
                    variant={'filled'}
                    height={30}
                    className={cls.createButton}
                    dark
                    padding={'18px 14px'}
                >
                    { !collapsed ? `${t('+ Create')}` : '+'}
                </Button>
            </div>
            <Icon
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                Svg={ArrowIcon}
                clickable
            />
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
            { !collapsed ?
                <HStack justify="between" className={cls.bottom}>
                    <Text selectNone minor fontSize={10} text={t('Privacy & Policy')}></Text>
                    <Text selectNone minor fontSize={10} text={t('Terms & Conditions')}></Text>
                </HStack>
                :
                null
            }

        </aside>
    );
});
