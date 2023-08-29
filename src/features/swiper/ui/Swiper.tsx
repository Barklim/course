import React, { useEffect, useRef } from 'react';
import cls from './Swiper.module.scss';
import { useSelector } from 'react-redux';
import { getCourseData } from '@/entities/Course';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCourses } from '@/entities/Course/model/services/fetchCourses/fetchCourses';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Swiper.css';

import { EffectCreative, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../../../../hostImg/1.jpeg';
import slide_image_2 from '../../../../hostImg/2.jpeg';
import slide_image_3 from '../../../../hostImg/3.jpeg';
import slide_image_4 from '../../../../hostImg/4.jpeg';
import slide_image_5 from '../../../../hostImg/5.jpeg';
import slide_image_6 from '../../../../hostImg/6.jpeg';

export const Swiper = () => {
    const dispatch = useAppDispatch();
    const courses = useSelector(getCourseData);

    const renderSlides = () => {
        return (
            <>
                <SwiperSlide  className={cls.swiperSlide}>
                    <img src={slide_image_1} alt="slide_image" />
                    <div className={cls.bottomGradient}></div>
                </SwiperSlide>
                <SwiperSlide className={cls.swiperSlide}>
                    <img src={slide_image_2} alt="slide_image" />
                    <div className={cls.bottomGradient}></div>
                </SwiperSlide>
                <SwiperSlide className={cls.swiperSlide}>
                    <img src={slide_image_3} alt="slide_image" />
                    <div className={cls.bottomGradient}></div>
                </SwiperSlide>
                <SwiperSlide className={cls.swiperSlide}>
                    <img src={slide_image_4} alt="slide_image" />
                    <div className={cls.bottomGradient}></div>
                </SwiperSlide>
                <SwiperSlide className={cls.swiperSlide}>
                    <img src={slide_image_5} alt="slide_image" />
                    <div className={cls.bottomGradient}></div>
                </SwiperSlide>
                <SwiperSlide className={cls.swiperSlide}>
                    <img src={slide_image_6} alt="slide_image" />
                    <div className={cls.bottomGradient}></div>
                </SwiperSlide>
            </>
        );
    };

    return (
        <div className={cls.wrapper} >
            <SwiperReact
                modules={[EffectCreative, Pagination, Navigation]}
                effect={'creative'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                spaceBetween={40}
                slidesPerView={3}
                className={cls.container}
                creativeEffect={{
                    next: {
                        translate: [490, 0, 0],
                        rotate: [0,0,10],
                        opacity: 0.9,
                        scale: 0.7
                    },
                    prev: {
                        translate: [-490, 0, 0],
                        rotate: [0,0,-10],
                        opacity: 0.9,
                        scale: 0.7,
                    },
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
            >
                {renderSlides()}

                <div className="slider-controler">
                    <div className="swiper-button-next slider-arrow"></div>
                    <div className="swiper-button-prev slider-arrow"></div>
                    <div className="swiper-pagination"></div>
                </div>
            </SwiperReact>
        </div>
    );
};
