import React, { memo, useRef, useState } from 'react';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Circle } from '@/shared/ui/revamped/Gsap';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { CircleProps } from '@/shared/ui/revamped/Gsap/Circle/ui/Circle';
import cls from './HistoryGsap.module.scss';

export interface HistoryGsapProps extends Omit<CircleProps, 'activeItem' | 'setActiveItem'> {
    className?: string;
}

const HistoryGsap = memo((props: HistoryGsapProps) => {
    const { className, id, titles, intervals, pointCount, radius, extraRotation, numberVisibility, duration } = props;

    const isLoading = false;
    if (isLoading) {
        return <Skeleton width="100%" height={140} />;
    }

    const [activeItem, setActiveItem] = useState<number>(0)

    const buttonRefs = Array.from({ length: 2 }).map(() => useRef<HTMLButtonElement | null>(null));

    const circleComponent =
        <React.Fragment>
            <Circle
                id={id}
                titles={titles}
                intervals={intervals}
                pointCount={pointCount}
                radius={radius}
                extraRotation={extraRotation}
                numberVisibility={numberVisibility}
                duration={duration}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                buttonPlay={buttonRefs[0]}
                buttonPlayReverse={buttonRefs[1]}
            />
            <HStack gap='8' align='start' justify='start'>
                <button ref={buttonRefs[0]}>⬅</button>
                <button ref={buttonRefs[1]}>⮕</button>
            </HStack>
        </React.Fragment>

    return (
        <VStack gap='32' align='start'>
            {circleComponent}
        </VStack>
    );
});

export default HistoryGsap;
