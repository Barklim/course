import React, { HTMLAttributes, memo, ReactNode, useState, useEffect } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Carousel.module.scss';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

import 'swiper/css';
import 'swiper/css/navigation';
import { LOCAL_STORAGE_SIDEBAR_STATE } from '@/shared/const/localstorage';

export type Direction = 'forward' | 'backward';

interface CarouselProps extends HTMLAttributes<HTMLElement> {
    className?: string;
    /**
     * Флаг, загрузки
     */
    loading?: boolean;
    /**
     * Флаг, зацикленности
     */
    loop?: boolean;
    /**
     * Содержимое карусели
     */
    children?: ReactNode;
    /**
     * Полный размер карусели
     */
    fullWidth?: boolean;
    /**
     * Флаг, автозапуска анимации пролистывания
     */
    isAnimate?: boolean;
    /**
     * Флаг, определяющий направление свайпов
     */
    direction?: Direction;
    /**
     * Слайды
     */
    items?: any;
    /**
     * TODO: skeleton, itemSlide layout
     */
}

export const Carousel = memo((props: CarouselProps) => {
    const {
        className,
        children,
        loading = false,
        loop = false,
        direction = 'forward',
        fullWidth = true,
        items,
        ...otherProps
    } = props;


    const [loading1, setLoading] = useState(localStorage.getItem(LOCAL_STORAGE_SIDEBAR_STATE) === "false");

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 700);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);
    
    // TODO: provide swipe width by props
    const windowWidth = window.innerWidth;
    const contentWidth = windowWidth > 1440 ? windowWidth - 280 : windowWidth - 200;
    const swipeWidth = windowWidth > 1560 ? 1280 : contentWidth

    const mods: Mods = {
        [cls.fullWidth]: fullWidth,
    };

    const renderSkeleton = () => {
        return [1,2,3].map((item, index) => (
            <SwiperSlide key={item} className={cls.swiperSlide} property={'skeleton'} virtualIndex={item}>
                <div className={cls.skeleton}>
                    <VStack gap={'8'}>
                        <Skeleton className={cls.skeleton__title} width="35%" height={40} />
                        <Skeleton width="100%" height={30} />
                        <Skeleton width="85%" height={30} />
                        <Skeleton width="65%" height={30} />
                    </VStack>
                </div>
            </SwiperSlide>
        ));
    };

    const renderSlides = (items: any[] | undefined) => {
        if (loading1) {
            return renderSkeleton();
        } else {
            return items?.map((item, index) => (
                <SwiperSlide key={item.swipeImg} className={cls.swiperSlide} virtualIndex={item}>
                    <div className={cls.slideContent}>{item}</div>
                </SwiperSlide>
            ));
        }
    };

        return (
            <div className={classNames(cls.Carousel, mods, [className, cls[direction]])}>
                {items ?
                    <Swiper
                        modules={[ Navigation, Scrollbar, Pagination]}
                        grabCursor={true}
                        spaceBetween={80}
                        slidesPerView={3}
                        className={cls.container}
                        // navigation={{
                        //     nextEl: '.swiper-button-next',
                        //     prevEl: '.swiper-button-prev',
                        // }}
                        navigation
                        pagination={{ clickable: true }}
                        width={swipeWidth}
                        style={{ maxWidth: swipeWidth}}
                        setWrapperSize={true}

                        initialSlide={0}
                    >
                        {renderSlides(items)}
                    </Swiper> : null
                }
            </div>
        );
    }
);
