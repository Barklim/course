import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';
import { AppLink } from '@/shared/ui/revamped/AppLink';
import { Icon } from '@/shared/ui/revamped/Icon';
import { getRouteWatch, getRouteCommunity } from '@/shared/const/router';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppImage } from '@/shared/ui/redesigned/AppImage';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
    onClick?: any;
    isActive?: any;
}

const img1 = 'https://github.com/Barklim/course/blob/main/hostImg/swipe2.jpeg?raw=true';
const img2 = 'https://github.com/Barklim/course/blob/main/hostImg/3.jpeg?raw=true';
const img3 = 'https://github.com/Barklim/course/blob/main/hostImg/1.jpeg?raw=true';

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
            {item.path === getRouteWatch() ?
                <HStack justify='between' className={cls.watchContainer}>
                    <div className={cls.watchLeft}>
                        <Icon width={20} height={20} Svg={item.Icon} className={cls.sidebarIcon} isActive={isActive} />
                        <span className={cls.link}>{t(item.text)}</span>
                    </div>
                    <div className={cls.watchers}>2</div>
                </HStack>
                :
                null
            }

            {item.path === getRouteCommunity() ?
                <HStack justify='between' className={cls.watchContainer}>
                    <div className={cls.watchLeft}>
                        <Icon width={20} height={20} Svg={item.Icon} className={cls.sidebarIcon} isActive={isActive} />
                        <span className={cls.link}>{t(item.text)}</span>
                    </div>
                    <div className={cls.communityWrapper}>
                        {
                            collapsed ?
                                <>
                                    <AppImage
                                        fallback={<Skeleton border="50%" width={30} height={30} className={cls.imgGap} />}
                                        src={img1}
                                        className={classNames(cls.communityImg, {}, [])}
                                        width={30}
                                        height={30}
                                    />
                                </>
                                :
                                <>
                                    <AppImage
                                        fallback={<Skeleton border="50%" width={30} height={30} className={cls.imgGap} />}
                                        src={img1}
                                        className={classNames(cls.communityImg, {}, [])}
                                        width={30}
                                        height={30}
                                    />
                                    <AppImage
                                        fallback={<Skeleton border="50%" width={30} height={30} className={cls.imgGap} />}
                                        src={img2}
                                        className={classNames(cls.communityImg, {}, [cls.imgGap])}
                                        width={30}
                                        height={30}
                                    />
                                    <AppImage
                                        fallback={<Skeleton border="50%" width={30} height={30} className={cls.imgGap} />}
                                        src={img3}
                                        className={classNames(cls.communityImg, {}, [cls.imgGap])}
                                        width={30}
                                        height={30}
                                    />
                                </>
                        }
                    </div>
                </HStack>
                :
                null
            }

            {item.path !== getRouteWatch() && item.path !== getRouteCommunity() ?
                <>
                    <Icon width={20} height={20} Svg={item.Icon} className={cls.sidebarIcon} isActive={isActive} />
                    <span className={cls.link}>{t(item.text)}</span>
                </>
                :
                null
            }
        </AppLink>
    );
});
