import React, { HTMLAttributes, memo, ReactNode, useEffect, useRef, useState } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Carousel.module.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import 'swiper/css';
import 'swiper/css/navigation';
import { ButtonSwipe } from '@/shared/ui/revamped/ButtonSwipe';

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
     * Скорость анимации шага
     */
    duration?: number;
    /**
     * Содержимое карусели
     */
    children?: ReactNode;
    /**
     * Полный размер карусели
     */
    fullWidth?: boolean;
    /**
     * Ширина карусели
     */
    width?: number;
    /**
     * Флаг, автозапуска анимации пролистывания
     */
    isAnimate?: boolean;
    /**
     * Флаг, определяющий направление свайпов
     */
    direction?: Direction;
    /**
     * Отступы кнопок дальше и назад
     */
    offset?: number;
    /**
     * Слайды
     */
    items?: any;
}

export const Carousel = memo((props: CarouselProps) => {
    const {
        className,
        children,
        loading = false,
        loop = false,
        duration = 800,
        direction = 'forward',
        offset = 0,
        fullWidth = true,
        width,
        items,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.fullWidth]: fullWidth,
    };

    const swiperRef = useRef<SwiperCore | null>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        if (swiperRef.current) {
            setTimeout(
                () => {swiperRef.current?.slideTo(0, 0)}, duration * 1000
            )
        }
    }, [items]);

    const additionalClassesPrev = [cls.swiperSlide_reset, 'custom-prev'];
    const additionalClassesNext = [cls.swiperSlide_reset, 'custom-next'];

    const handleSwiper = (swiper: SwiperCore) => {
        swiper.on('slideChange', () => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
        });
    };

    const renderSkeleton = () => {
        return [1,2,3].map((item, index) => (
            <SwiperSlide key={item} className={cls.swiperSlide} property={'skeleton'} virtualIndex={item}>
                <div className={cls.skeleton}>
                    <VStack gap={'8'}>
                        <Skeleton className={cls.skeleton__title} width="35%" height={32} />
                        <Skeleton width="100%" height={24} />
                        <Skeleton width="85%" height={24} />
                        <Skeleton width="65%" height={24} />
                    </VStack>
                </div>
            </SwiperSlide>
        ));
    };

    const renderSlides = (items: any[] | undefined) => {
        if (loading) {
            return renderSkeleton();
        } else {
            return items?.map((item, index) => (
                <SwiperSlide key={item.swipeImg} className={cls.swiperSlide} virtualIndex={item}>
                    {item}
                </SwiperSlide>
            ));
        }
    };

    return (
        <div className={classNames(cls.Carousel, mods, [className, cls[direction]])}>
            <SwiperSlide className={classNames(cls.NextButton, {}, additionalClassesPrev)}>
                <ButtonSwipe offset={offset} hidden={isBeginning} left />
            </SwiperSlide>
            {items ?
                <Swiper
                    modules={[ Navigation, Scrollbar, Pagination]}
                    grabCursor={true}
                    spaceBetween={80}
                    slidesPerView={3}
                    className={cls.container}
                    navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
                    pagination={{ clickable: true }}
                    width={width}
                    style={{ maxWidth: width}}
                    setWrapperSize={true}
                    initialSlide={0}
                    onSwiper={(swiper) => { swiperRef.current = swiper; handleSwiper(swiper); }}
                >
                    {renderSlides(items)}
                </Swiper> : null
            }
            <SwiperSlide className={classNames(cls.PrevButton, {}, additionalClassesNext)}>
                <ButtonSwipe offset={offset} hidden={isEnd} right />
            </SwiperSlide>
        </div>
    );
});
