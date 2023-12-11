import React from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Carousel.module.scss';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/revamped/Text';
import { Button } from '@/shared/ui/revamped/Button';
import { Icon } from '@/shared/ui/revamped/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import {
    EventCard,
    EventListDataProvider,
    getEventData,
} from '@/entities/Event';
import { useSelector } from 'react-redux';
import { getEventIsLoading } from '@/entities/Event/model/selectors/event';
import { Carousel } from '@/shared/ui/revamped/Gsap/Carousel';
import { getRouteSwipe } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/redesigned/AppLink';

export const CarouselEvents = () => {
    const { t } = useTranslation('community');
    const events = useSelector(getEventData);
    const loading = useSelector(getEventIsLoading);

    return (
        <EventListDataProvider>
            <div className={cls.carouselWrapper}>
                <HStack align="end" justify="between" className={cls.header}>
                    <Text selectNone title={t('Recent events')} fontSize={24} />
                    <AppLink to={getRouteSwipe()}>
                        <Button variant="borderNone" fontSize={14} className={cls.seeAll} textColorByTheme={'purple'} addonRight={
                            <Icon
                                data-testid="carousel-see-all"
                                className={cls.seeAllIcon}
                                Svg={ArrowIcon}
                                textColorByTheme={'purple'}
                            />
                        }>{t('See all')}</Button>
                    </AppLink>
                </HStack>
                <div className={cls.sliderWrapper}>
                    <Carousel width={'293px'} items={events} loading={loading} eventCard={EventCard} draggable />
                </div>
            </div>
        </EventListDataProvider>
    );
};
