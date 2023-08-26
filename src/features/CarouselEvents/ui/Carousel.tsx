import React, { useEffect, useRef, useState } from 'react';
// @ts-ignore
import gsap from '../../../../modules/gsap-trial';
// @ts-ignore
import InertiaPlugin from '../../../../modules/gsap-trial/dist/InertiaPlugin';
// @ts-ignore
import Draggable from '../../../../modules/gsap-trial/dist/Draggable';
import { useDebounce } from '@/app/lib/useDebounce';
import { useTranslation } from 'react-i18next';
import cls from './Carousel.module.scss';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/revamped/Text';
import { Button } from '@/shared/ui/revamped/Button';
import { Icon } from '@/shared/ui/revamped/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import {
    CardColorEnum,
    Event,
    EventCard,
    EventListDataProvider,
    getEventData,
    getGradientColor,
} from '@/entities/Event';
import { useSelector } from 'react-redux';
import { getEventIsLoading } from '@/entities/Event/model/selectors/event';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { Theme } from '@/shared/const/theme';

const Slide = ({slide, isLoading, cardColor, theme}: {slide: any, isLoading: boolean, cardColor?: CardColorEnum, theme?: Theme}) => {
    const gradientColor = cardColor ? getGradientColor(cardColor, theme) : '';
    return (
        <div className={cls.slide}>
            <div className={cls.preview}>
                <EventCard cardColor={gradientColor} event={slide as Event} isLoading={isLoading} />
            </div>
        </div>
    );
};

export const Carousel = () => {
    const { t } = useTranslation('community');
    let sliderRef = useRef<HTMLDivElement | null>(null);
    const [storageTheme, setStorageTheme] = useState<Theme>(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.DARK)
    const events = useSelector(getEventData);
    const loading = useSelector(getEventIsLoading);

    useEffect(() => {
        // TODO: this decision is not working, but bad solving bottom with long pooling is bad
        // window.addEventListener('storage', () => {
        //     console.log("Change to local storage!");
        // });
        const interval = setInterval(() => {
            const newValue = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.DARK;
            if (newValue !== storageTheme) {
                setStorageTheme(newValue);
            }
        }, 1000); //

        return () => {
            clearInterval(interval);
        };
    }, [storageTheme]);

    useEffect(() => {
        gsap.registerPlugin(Draggable, InertiaPlugin);
        const slider = sliderRef.current;

        const sliderWidth = slider?.clientWidth || 0 ;
        const numSlides = events?.length || 1;

        const start = () => {
            gsap.to(slider, {
                x: -sliderWidth/5 ,
                duration: numSlides * 5,
                repeat: -1,
                ease: "none"
            });
            // gsap.to(slider, {
            //     x: 0,
            //     duration: 0,
            //     repeat: -1,
            //     ease: "none"
            // });
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
    }, [events, loading]);

    let aIndex = 0;

    const renderCarousel = loading ?
        <>
            {['slide', 's', 's', 's', 's']?.map((slide, index) => {
                return (
                    <Slide key={index} slide={slide} isLoading={true} />
                );
            })}
        </>
        :
        <>
            {events?.map((event, index) => {
                const currentA = index % (Object.keys(CardColorEnum).length / 2) + 1;
                const currentCardColor = currentA as CardColorEnum;

                return (
                    <Slide key={event.id} slide={event} isLoading={false} cardColor={currentCardColor} theme={storageTheme} />
                );
            })}
        </>

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
                    <div id="slider" className={cls.slider}  ref={sliderRef}>
                        {renderCarousel}
                    </div>
                </div>
            </div>
        </EventListDataProvider>
    );
};
