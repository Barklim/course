import React, { useEffect } from 'react';
import cls from './SequentialAnimatedList.module.scss';
import useIsomorphicLayoutEffect from '@/shared/ui/revamped/Carousel/helpers/isomorphicLayout';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Swiper as SwiperReact, SwiperRef, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import './SequentialAnimatedList.css';
// import './Swiper.css';

const img1 = 'https://github.com/Barklim/course/blob/main/hostImg/swipe2.jpeg?raw=true';
const img2 = 'https://github.com/Barklim/course/blob/main/hostImg/3.jpeg?raw=true';
const img3 = 'https://github.com/Barklim/course/blob/main/hostImg/1.jpeg?raw=true';

const images = [img1, img2, img3, img1, img3, img3 ,img3];

export const SequentialAnimatedList = ({}) => {
    const renderSlides = (courses: any | undefined) => {
        return (
            <>
                {courses.map((item: any, index: any) => {
                    return (
                        <SwiperSlide key={item} className={cls.swiperSlide} property={'skeleton'}>
                            <AppImage
                                fallback={<Skeleton border="50%" width={30} height={30} className={cls.imgGap} />}
                                src={item}
                                className={classNames(cls.communityImg, {}, [])}
                                width={30}
                                height={30}
                            />
                        </SwiperSlide>
                    );
                })}
            </>
        )
    }

    return (
        <>
            <div className={cls.container}>
                <div className={cls.slider}>
                    <SwiperReact
                        // modules={[Autoplay]}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 1500,
                        }}
                        // spaceBetween={-120}
                        watchSlidesProgress={true}
                        slidesPerView={3}
                        className="mySwiper"
                        // width={40}
                        direction={'horizontal'}
                    >
                        {renderSlides(images)}
                    </SwiperReact>
                </div>
            </div>
        </>
    );
};
