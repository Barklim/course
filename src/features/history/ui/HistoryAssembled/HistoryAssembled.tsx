import React, { memo, useRef } from 'react';
// import { useGetHistory, useHistory } from '../../api/historyGsapApi';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Circle } from '@/shared/ui/revamped/Gsap';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import cls from './HistoryAssembled.module.scss';
import { mockTitleAssembled } from '@/shared/const/mock';
import { Text } from '@/shared/ui/revamped/Text';

export interface HistoryAssembledProps {
    className?: string;
}

const mockTitles = mockTitleAssembled.map((title) => (<Text text={title} />));

const HistoryAssembled = memo((props: HistoryAssembledProps) => {
    const { className } = props;

    const isLoading = false;
    if (isLoading) {
        return <Skeleton width="100%" height={140} />;
    }

    const buttonRefs = Array.from({ length: 2 }).map(() => useRef<HTMLButtonElement | null>(null));

    const circleComponent =
        <React.Fragment>
            <VStack max className={cls.border}>
                <HStack max justify='center' align='center'>
                    <Circle
                        id={'history_assembled'}
                        titles={mockTitles}
                        pointCount={6}
                        radius={265}
                        duration={0.8}
                        buttonPlay={buttonRefs[0]}
                        buttonPlayReverse={buttonRefs[1]}
                    />
                </HStack>
                <HStack gap='8' align='end' justify='end' className={cls.buttons}>
                    <button ref={buttonRefs[0]}>⬅</button>
                    <button ref={buttonRefs[1]}>⮕</button>
                </HStack>
            </VStack>
            <div className={cls.border}>Carousel</div>
        </React.Fragment>

    return (
        <VStack max gap='0' className={cls.wrapper} justify='around'>
            {circleComponent}
        </VStack>
    );
});

export default HistoryAssembled;
