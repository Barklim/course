import React, { useEffect, useRef, useState } from 'react';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/revamped/Text';
import { Carousel } from '@/shared/ui/revamped/Carousel';
import { intervalCarouselEl6 } from '@/shared/const/mock';
import { useLocalStorage } from '@/app/lib/useLocalStorage';
import { PointsType } from '@/shared/types/gsap';
import useDebouncedEffect from '@/app/lib/useDebounceEffect';

export interface HistoryCarouselProps {
    activeItem: PointsType;
    duration: number;
}

export const HistoryCarousel = (props: HistoryCarouselProps) => {
    const { activeItem, duration } = props;
    const { sidebarState } = useLocalStorage();
    let windowWidth = window.innerWidth;

    const [debouncedItem, setDebouncedItem] = useState(activeItem);
    const [animationStatus, setAnimationStatus] = useState<'fadeIn' | 'fadeOut' | 'none'>('none');
    const renderCounter = useRef(0);

    const fadeStyles = {
        fadeOut: {
            opacity: 0,
            transition: `opacity ${duration/2}s ease-in-out`,
        },
        fadeIn: {
            opacity: 1,
            transition: `opacity ${duration/2}s ease-in-out`,
        },
        none: {
            opacity: 1,
        },
    };

    useEffect(() => {
        if (renderCounter.current >= 1) {
            setAnimationStatus('fadeOut');
        }
        renderCounter.current += 1;
    }, [activeItem]);

    useDebouncedEffect(() => {
        if (activeItem !== debouncedItem) {
            setTimeout(() => {
                setDebouncedItem(activeItem);
                setAnimationStatus('fadeIn');
            }, duration*0.75);
        } else {
            setDebouncedItem(activeItem);
        }
        return () => {};
    }, duration * 1000 ,[activeItem]);

    let swipeWidth = window.innerWidth;
    if (sidebarState === 'true') {
        const contentWidth = windowWidth > 1440 ? windowWidth - 460 : windowWidth - 380;
        swipeWidth = windowWidth > 1740 ? 1280 : contentWidth
    } else {
        const contentWidth = windowWidth > 1440 ? windowWidth - 280 : windowWidth - 200;
        swipeWidth = windowWidth > 1560 ? 1280 : contentWidth
    }

    const shouldParseLine = sidebarState === 'true'
        ? windowWidth > 1740
        : windowWidth > 1560;

    const mockIntervals = intervalCarouselEl6[debouncedItem].map((item) => (
        <VStack gap={'8'} key={debouncedItem}>
            <Text selectNone fontWeight={'400'} fontSize={20} lineHeight={'30px'} color="#3877EE" title={item.title} />
            <VStack gap={'0'} key={debouncedItem}>
                {
                    shouldParseLine ?
                        item.text.split('\n').map((line, index) => (
                            <Text key={index} selectNone fontWeight={'100'} fontSize={18} lineHeight={'30px'} textColorByTheme="history" text={line} />
                        ))
                        :
                        item.text.replace(/\n/g, '').split('\n').map((line, index) => (
                            <Text key={index} selectNone fontWeight={'100'} fontSize={18} lineHeight={'30px'} textColorByTheme="history" text={line} />
                        ))
                }
            </VStack>
        </VStack>
    ));

    return <div data-testid="HistoryCarousel" style={fadeStyles[animationStatus]}>
        <Carousel items={mockIntervals} width={swipeWidth} />
    </div>;
};

export default HistoryCarousel;
