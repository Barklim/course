import React, { useEffect, useRef, useState } from 'react';
// @ts-ignore
// import gsap from '../../../../modules/gsap-trial';
import gsap from '../../../../../../modules/gsap-trial';
// @ts-ignore
import InertiaPlugin from '../../../../../../modules/gsap-trial/dist/InertiaPlugin';
// @ts-ignore
import Draggable from '../../../../../../modules/gsap-trial/dist/Draggable';
import { useDebounce } from '@/app/lib/useDebounce';
import cls from './Carousel.module.scss';
import { Event } from '@/entities/Event';
import { CardColorEnum, getGradientColor } from '@/shared/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { Theme } from '@/shared/const/theme';
import { EventCardProps } from '@/entities/Event/ui/EventCard/EventCard';

interface CarouselProps {
    items: Event[] | undefined;
    loading: boolean;
    eventCard?: React.ComponentType<EventCardProps>;
}

interface SlideProps {
    slide: any;
    isLoading: boolean;
    cardColor?: CardColorEnum;
    theme?: Theme;
    eventCard?: React.ComponentType<EventCardProps>;
}

const Slide: React.FC<SlideProps> = ({
    slide,
    isLoading,
    cardColor,
    theme,
    eventCard: EventCard
}) => {
    const gradientColor = cardColor ? getGradientColor(cardColor, theme) : '';
    return (
        <div className={cls.slide}>
            <div className={cls.preview}>
                {EventCard ? (
                    <EventCard cardColor={gradientColor} event={slide as Event} isLoading={isLoading} />
                ) : (
                    <div>Missing eventCard</div>
                )}
            </div>
        </div>
    );
};

export const Carousel: React.FC<CarouselProps> = ({
    items,
    loading,
    eventCard
}) => {
    let sliderRef = useRef<HTMLDivElement | null>(null);
    const [storageTheme, setStorageTheme] = useState<Theme>(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.DARK)

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
        const numSlides = items?.length || 1;

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
    }, [items, loading]);

    let aIndex = 0;

    const renderCarousel = loading ?
        <>
            {['slide', 's', 's', 's', 's']?.map((slide, index) => {
                return (
                    <Slide
                        key={index}
                        slide={slide}
                        isLoading={true}
                        eventCard={eventCard}
                    />
                );
            })}
        </>
        :
        <>
            {items?.map((event, index) => {
                const currentA = index % (Object.keys(CardColorEnum).length / 2) + 1;
                const currentCardColor = currentA as CardColorEnum;

                return (
                    <Slide
                        key={event.id}
                        slide={event}
                        isLoading={false}
                        cardColor={currentCardColor}
                        theme={storageTheme}
                        eventCard={eventCard} />
                );
            })}
        </>

    return (
        <div id="slider" className={cls.slider}  ref={sliderRef}>
            {renderCarousel}
        </div>

    );
};
