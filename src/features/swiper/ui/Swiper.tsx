import React from 'react';
import cls from './Swiper.module.scss';
import { useSelector } from 'react-redux';
import { Course, getCourseData } from '@/entities/Course';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/revamped/Text';
import { Button } from '@/shared/ui/revamped/Button';
import { fetchCourses } from '@/entities/Course/model/services/fetchCourses/fetchCourses';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { courseReducer } from '@/entities/Course/model/slices/courseSlice';
import { getCourseIsLoading } from '@/entities/Course/model/selectors/course';
import { useTranslation } from 'react-i18next';
import { Icon } from '@/shared/ui/revamped/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Swiper as SwiperReact, SwiperRef, SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation } from 'swiper';
import SwiperCore, { Manipulation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import './Swiper.css';
import { getRouteAcademy, getRouteWatch } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/redesigned/AppLink';

SwiperCore.use([ Manipulation ]);

export const Swiper = React.memo(() => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('');
    const courses = useSelector(getCourseData);
    const loading = useSelector(getCourseIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCourses());
    });

    const reducers: ReducersList = {
        course: courseReducer,
    };

    const renderSlides = (courses: Course[] | undefined) => {
        if (loading) {
            return (
                <>
                    {['c','o'].map((item, index) => {
                        return (
                            <SwiperSlide key={item} className={cls.swiperSlide} property={'skeleton'}>
                                <div className={cls.imgStab}></div>
                                <VStack className={cls.titleStab} gap={'8'}>
                                    <Skeleton width="80%" height={50} />
                                    <Skeleton width="60%" height={50} />
                                </VStack>
                            </SwiperSlide>
                        );
                    })}
                </>
            )
        } else {
            return (
                <>
                    {courses?.map((course, index) => {
                        return (
                            <SwiperSlide key={course.swipeImg} className={cls.swiperSlide} virtualIndex={index}>
                                <img src={course.swipeImg} alt="slide_image" />
                                <div className={cls.title}>
                                    <Text text={course.swipeTitle} color={'#fff'} fontSize={32} />
                                </div>
                                <div className={cls.bottomGradient}></div>
                            </SwiperSlide>
                        );
                    })}
                </>
            );
        }
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={cls.wrapper} >
                <HStack justify="between">
                    <AppLink to={getRouteAcademy()}>
                        <Button variant="borderNone" fontSize={14} className={cls.academy} addonLeft={
                            <Icon
                                data-testid="carousel-see-all"
                                className={cls.academyIcon}
                                Svg={ArrowIcon}
                                setActive
                                color={'#fff'}
                            />
                        }><Text fontSize={32} bold color={'#fff'} text={t('Academy')} /></Button>
                    </AppLink>
                    <Button
                        height={42}
                        light
                        variant="filled"
                        className={cls.buttonLight}
                    >
                        <Text
                            fontSize={17}
                            bold
                            color={'#000'}
                            text={t('Skip')} />
                    </Button>
                </HStack>
                <div className={cls.slidesBlock}>
                    <div className={cls.sliderControllerWrapper}>
                        <div className={cls.sliderControllerLayout}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div  className="slider-controler">
                                <div className="swiper-button-next"></div>
                                <div className="swiper-button-prev"></div>
                            </div>
                            <div></div>
                        </div>
                        {courses ?
                            <SwiperReact
                                modules={[EffectCreative, Navigation]}
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
                                        opacity: 0.95,
                                        scale: 0.7
                                    },
                                    prev: {
                                        translate: [-490, 0, 0],
                                        rotate: [0,0,-10],
                                        opacity: 0.95,
                                        scale: 0.7,
                                    },
                                }}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                                initialSlide={0}
                            >
                                {renderSlides(courses)}
                            </SwiperReact> : null
                        }
                        { !courses ?
                        <SwiperReact
                            modules={[EffectCreative, Navigation]}
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
                                    opacity: 0.95,
                                    scale: 0.7
                                },
                                prev: {
                                    translate: [-490, 0, 0],
                                    rotate: [0,0,-10],
                                    opacity: 0.95,
                                    scale: 0.7,
                                },
                            }}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            initialSlide={0}
                        >
                            {renderSlides(courses)}
                        </SwiperReact> : null
                        }
                    </div>
                </div>
            </div>
        </DynamicModuleLoader>
    );
});
