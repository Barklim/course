import React from 'react';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/revamped/Text';
import { Carousel } from '@/shared/ui/revamped/Carousel';
import { intervalCarouselEl6 } from '@/shared/const/mock';
import { useLocalStorage } from '@/app/lib/useLocalStorage';
import { PointsType } from '@/shared/types/gsap';

export interface HistoryCarouselProps {
    activeItem: PointsType;
}

export const HistoryCarousel = (props: HistoryCarouselProps) => {
    const { activeItem } = props;
    const { sidebarState } = useLocalStorage();
    let windowWidth = window.innerWidth;

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

    const mockIntervals = intervalCarouselEl6[activeItem].map((item) => (
        <VStack gap={'8'} key={activeItem}>
            <Text selectNone fontWeight={'400'} fontSize={20} lineHeight={'30px'} color="#3877EE" title={item.title} />
            <VStack gap={'0'} key={activeItem}>
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

    return <div data-testid="HistoryCarousel">
        <Carousel items={mockIntervals} width={swipeWidth} />
    </div>;
};

export default HistoryCarousel;
