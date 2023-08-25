import React, { useRef, useEffect } from "react";
// @ts-ignore
import gsap  from '../../../../modules/gsap-trial';
// @ts-ignore
import InertiaPlugin  from '../../../../modules/gsap-trial/dist/InertiaPlugin';
// @ts-ignore
import Draggable  from '../../../../modules/gsap-trial/dist/Draggable';
import { useDebounce } from '@/app/lib/useDebounce';
import { useTranslation } from 'react-i18next';
import cls from './Carousel.module.scss';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/revamped/Text';
import { Button } from '@/shared/ui/revamped/Button';
import { Icon } from '@/shared/ui/revamped/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { EventCard, EventListDataProvider, getEventData, Event } from '@/entities/Event';
import { useSelector } from 'react-redux';

// TODO: ASYNC
const Slide = ({event}: {event: Event}) => {
    return (
        <div className={cls.slide}>
            <div className={cls.preview}>
                <img src={event.user.avatar} style={{height: "200px"}}/>
                <EventCard event={event}/>
            </div>
        </div>
    );
};

export const Carousel = () => {
    const { t } = useTranslation('community');
    const sliderRef = useRef<HTMLInputElement | null>(null);
    const events = useSelector(getEventData);

    useEffect(() => {
        gsap.registerPlugin(Draggable, InertiaPlugin);
        const slider = sliderRef.current;

        const sliderWidth = slider?.clientWidth || 0 ;
        const numSlides = events?.length || 1;

        const start = () => {
            gsap.to(slider, {
                x: -sliderWidth/3 ,
                duration: numSlides * 3,
                repeat: -1,
                ease: "none"
            });
            gsap.to(slider, {
                x: 0,
                duration: 0,
                repeat: -1,
                ease: "none"
            });
        }
        setTimeout(start, 5000);

        const debouncedFunction = useDebounce(() => {
            start()
        }, 3000);

        Draggable.create(sliderRef.current, {
            type: "x",
            bounds: {

                minX: -sliderWidth + window.innerWidth * 0.88,
                maxX: 0
            },
            inertia: true,
            onDragEnd() {
                debouncedFunction()
            }
        });
    }, [events]);

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
                    <div id="slider" className={cls.slider} ref={sliderRef}>
                        {events?.map((event, index) => {
                            return (
                                <Slide key={event.id} event={event} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </EventListDataProvider>
    );
};
