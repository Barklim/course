import React, { useEffect, useRef, useState } from 'react';
// @ts-ignore
import gsap from '../../../../../../modules/gsap-trial';
// @ts-ignore
import InertiaPlugin from '../../../../../../modules/gsap-trial/dist/InertiaPlugin';
// @ts-ignore
import Draggable from '../../../../../../modules/gsap-trial/dist/Draggable';
import { useDebounce } from '@/app/lib/useDebounce';
import cls from './SequentialAnimatedList.module.scss';
import { Event } from '@/entities/Event';
import { CardColorEnum, getGradientColor } from '@/shared/const/theme';
import { Theme } from '@/shared/const/theme';
import { EventCardProps } from '@/entities/Event/ui/EventCard/EventCard';
import { Course } from '@/entities/Course';
import { CourseCardProps } from '@/entities/Course/ui/CourseCard/CourseCard';
import { useLocalStorage } from '@/app/lib/useLocalStorage';
import { CourseView } from '@/entities/Course/model/consts/courseConsts';
import useIsomorphicLayoutEffect from '@/shared/ui/revamped/Carousel/helpers/isomorphicLayout';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Swiper as SwiperReact, SwiperRef, SwiperSlide } from 'swiper/react';
import { EffectCreative, EffectCoverflow } from 'swiper';
import SwiperCore, { Manipulation } from 'swiper';
import 'swiper/css';
import './SequentialAnimatedList.css';
// import './Swiper.css';

const img1 = 'https://github.com/Barklim/course/blob/main/hostImg/swipe2.jpeg?raw=true';
const img2 = 'https://github.com/Barklim/course/blob/main/hostImg/3.jpeg?raw=true';
const img3 = 'https://github.com/Barklim/course/blob/main/hostImg/1.jpeg?raw=true';

// const images = [img1, img2, img3];
const images = [img1, img2, img3, img1, img3, img3 ,img3];

interface CarouselProps {
    // items: Event[] | Course[] | undefined;
    // loading: boolean;
    // play?: boolean;
    // width?: string | undefined;
    // draggable?: boolean;
    // eventCard?: React.ComponentType<EventCardProps> | React.ComponentType<CourseCardProps>;
}

interface SlideProps {
    // slide: any | React.ComponentType<AppImage>;
    // isLoading: boolean;
}

const Slide: React.FC<SlideProps> = ({
    // isLoading,
}) => {
    return (
        <AppImage
            fallback={<Skeleton border="50%" width={30} height={30} className={cls.imgGap} />}
            src={img1}
            className={classNames(cls.communityImg, {}, [])}
            width={30}
            height={30}
        />
    );
}

export const SequentialAnimatedList: React.FC<CarouselProps> = ({
    // items,
    // loading,
    // play,
    // width,
    // draggable,
}) => {
    const isAnimationCreatedRef = useRef(false);
    let sliderRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        gsap.registerPlugin(Draggable, InertiaPlugin);
        const slider = sliderRef.current;
    }, []);

    useIsomorphicLayoutEffect(() => {

    }, []);

    const renderCarousel = <>
        {images?.map((img, index) => {
            return (
                <Slide
                    key={img}
                    // width={width}
                    // isLoading={false}
                />
            );
        })}
    </>

    return (
        <>
            <div className={cls.container}>
                <div className={cls.slider} ref={sliderRef}>
                    {renderCarousel}
                </div>
            </div>
        </>
    );
};
