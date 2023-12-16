import React, { memo, useRef } from 'react';
// import { useGetHistory, useHistory } from '../../api/historyGsapApi';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Circle } from '@/shared/ui/revamped/Gsap';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { CircleProps } from '@/shared/ui/revamped/Gsap/Circle/ui/Circle';
import cls from './HistoryGsap.module.scss';

export interface HistoryGsapProps extends CircleProps {
    className?: string;
}

const HistoryGsap = memo((props: HistoryGsapProps) => {
    const { className, id, titles, pointCount, radius, extraRotation, numberVisibility, duration } = props;

    const isLoading = false;
    if (isLoading) {
        return <Skeleton width="100%" height={140} />;
    }

    const buttonRefs = Array.from({ length: 2 }).map(() => useRef<HTMLButtonElement | null>(null));

    const circleComponent =
        <React.Fragment>
            <Circle
                id={id}
                titles={titles}
                pointCount={pointCount}
                radius={radius}
                extraRotation={extraRotation}
                numberVisibility={numberVisibility}
                duration={duration}
                buttonPlay={buttonRefs[0]}
                buttonPlayReverse={buttonRefs[1]}
            />
            <HStack gap='8'>
                <button ref={buttonRefs[0]}>⬅</button>
                <button ref={buttonRefs[1]}>⮕</button>
            </HStack>
        </React.Fragment>

    return (
        <VStack gap='32' max>
            {circleComponent}
        </VStack>
    );
});

export default HistoryGsap;
