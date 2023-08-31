import React, { useEffect, useRef, useState } from 'react';
// @ts-ignore
import gsap from '../../../../../../modules/gsap-trial';
// @ts-ignore
import InertiaPlugin from '../../../../../../modules/gsap-trial/dist/InertiaPlugin';
// @ts-ignore
import Draggable from '../../../../../../modules/gsap-trial/dist/Draggable';
import { useDebounce } from '@/app/lib/useDebounce';
import cls from './Carousel.module.scss';
import { Event } from '@/entities/Event';
import { CardColorEnum, getGradientColor } from '@/shared/const/theme';
import { Theme } from '@/shared/const/theme';
import { EventCardProps } from '@/entities/Event/ui/EventCard/EventCard';
import useIsomorphicLayoutEffect from '../helpers/isomorphicLayout'
import horizontalLoop from '../helpers/horizontalLoop';
import { Course } from '@/entities/Course';
import { CourseCardProps } from '@/entities/Course/ui/CourseCard/CourseCard';
import { useLocalStorage } from '@/app/lib/useLocalStorage';
import { CourseView } from '@/entities/Course/model/consts/courseConsts';

interface CarouselProps {
    items: Event[] | Course[] | undefined;
    loading: boolean;
    play?: boolean;
    width?: string | undefined;
    courseView?: CourseView;
    draggable?: boolean;
    eventCard?: React.ComponentType<EventCardProps> | React.ComponentType<CourseCardProps>;
}

interface SlideProps {
    slide: any;
    isLoading: boolean;
    width?: string | undefined;
    courseView?: CourseView;
    cardColor?: CardColorEnum;
    theme?: Theme;
    eventCard?: React.ComponentType<EventCardProps> | React.ComponentType<CourseCardProps>;
}

const Slide: React.FC<SlideProps> = ({
    slide,
    isLoading,
    width,
    courseView,
    cardColor,
    theme,
    eventCard: EventCard
}) => {
    const gradientColor = cardColor ? getGradientColor(cardColor, theme) : '';
    const slideWidth = courseView === CourseView.SMALL ? '150px' : '230px';
    const slideHeight = courseView === CourseView.SMALL ? '222px' : '342px';

    return (
        <div
            property={'slide'} className={cls.slide} style={{
                width: width ? width : slideWidth,
                height: width ? '222px' : slideHeight
            }}>
            <div className={cls.preview}>
                {EventCard ? (
                    <EventCard cardColor={gradientColor} item={slide} isLoading={isLoading} courseView={courseView} />
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
    play,
    width,
    courseView,
    draggable,
    eventCard
}) => {
    let sliderRef = useRef<HTMLDivElement | null>(null);
    const isAnimationCreatedRef = useRef(false);
    const { storageTheme } = useLocalStorage();

    useEffect(() => {
        if (draggable) {
            // https://codesandbox.io/s/draggable-slider-with-gsap-forked-1tvogv?file=/src/components/Slider.js
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
        }
    }, [items, loading]);

    useIsomorphicLayoutEffect(() => {
        if (!isAnimationCreatedRef.current && !draggable) {
            let ctx: any;

            ctx = gsap.context(() => {
                gsap.registerPlugin(Draggable, InertiaPlugin);

                const elements = sliderRef.current?.childNodes;

                const tl = () => {
                    horizontalLoop(elements as unknown as HTMLElement[], {
                        repeat: 2,
                        paused: false,
                        speed: 0.02,
                        reversed: true,
                        paddingRight: 12,
                    });
                }
                play ? setTimeout(tl, 1000) : null;
            }, sliderRef);

            isAnimationCreatedRef.current = true; // Flag setting, generated animation

            return () => ctx && ctx.revert();
        }
    }, [ loading]);

    const renderCarousel = loading ?
        <>
            {['slide', 's', 's', 's', 's', 's']?.map((slide, index) => {
                return (
                    <Slide
                        key={index}
                        slide={slide}
                        width={width}
                        courseView={courseView}
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
                        width={width}
                        courseView={courseView}
                        isLoading={false}
                        cardColor={currentCardColor}
                        theme={storageTheme}
                        eventCard={eventCard} />
                );
            })}
        </>

    return (
        <>
            {(draggable) ?
                <div id="slider" className={cls.slider}  ref={sliderRef}>
                    {renderCarousel}
                </div>
            :
                <div className={cls.container}>
                    <div className={cls.slider} ref={sliderRef}>
                        {renderCarousel}
                    </div>
                </div>
            }
        </>
    );
};
