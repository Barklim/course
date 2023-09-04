import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';

import MainIcon from '@/shared/assets/icons/homeR.svg';
import CompassIcon from '@/shared/assets/icons/compass.svg';
import PlayIcon from '@/shared/assets/icons/play.svg';
import GroupIcon from '@/shared/assets/icons/group.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import AcademyIcon from '@/shared/assets/icons/academy.svg';

import { SidebarItemType } from '../types/sidebar';
import {
    getRouteAcademy,
    getRouteArticles,
    getRouteCommunity,
    getRouteMain,
    getRouteSwipe,
    getRouteWatch,
} from '@/shared/const/router';

export const useSidebarItems = () => {
    const userData = useSelector(getUserAuthData);
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: MainIcon,
            text: 'Главная',
        },
        {
            path: getRouteSwipe(),
            Icon: CompassIcon,
            text: 'Свайпер',
        },
        {
            path: getRouteWatch(),
            Icon: PlayIcon,
            text: 'Смотреть',
        },
        {
            path: getRouteCommunity(),
            Icon: GroupIcon,
            text: 'Сообщество',
        },
        {
            path: getRouteAcademy(),
            Icon: AcademyIcon,
            text: 'Академия',
        }
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteArticles(),
                Icon: ArticleIcon,
                text: 'Статьи',
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
};
