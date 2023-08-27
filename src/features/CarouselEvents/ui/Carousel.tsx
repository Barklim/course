import React from 'react';
// @ts-ignore
import gsap from '../../../../modules/gsap-trial';
// @ts-ignore
import InertiaPlugin from '../../../../modules/gsap-trial/dist/InertiaPlugin';
// @ts-ignore
import Draggable from '../../../../modules/gsap-trial/dist/Draggable';
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
import { Carousel } from '@/shared/ui/revamped/Carousel';

export const CarouselEvents = () => {
    const { t } = useTranslation('community');
    const events = useSelector(getEventData);
    const loading = useSelector(getEventIsLoading);

    return (
        <EventListDataProvider>
            <div className={cls.carouselWrapper}>
                <HStack align="end" justify="between" className={cls.header}>
                    <Text title={t('Recent events')} fontSize={24} />
                    <Button variant="borderNone" fontSize={14} className={cls.seeAll} addonRight={
                        <Icon
                            data-testid="carousel-see-all"
                            className={cls.seeAllIcon}
                            Svg={ArrowIcon}
                            color={'#8D5DDA'}
                        />
                    }>{t('See all')}</Button>
                </HStack>
                <div className={cls.sliderWrapper}>
                    <Carousel items={events} loading={loading} eventCard={EventCard} />
                </div>
            </div>
        </EventListDataProvider>
    );
};
