import React, { memo, useRef } from 'react';
// import { useGetHistory, useHistory } from '../../api/historyGsapApi';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Circle } from '@/shared/ui/revamped/Gsap';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import cls from './HistoryAssembled.module.scss';
import { mockTitleAssembled } from '@/shared/const/mock';
import { Text } from '@/shared/ui/revamped/Text';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

export interface HistoryAssembledProps {
    className?: string;
}

const mockTitles = mockTitleAssembled.map((title) => (<Text textColorByTheme='history' fontSize={20} selectNone lineHeight='30px' fontWeight='700' text={title} />));

const HistoryAssembled = memo((props: HistoryAssembledProps) => {
    const { className } = props;
    const { t } = useTranslation('history');

    const isLoading = false;
    if (isLoading) {
        return <Skeleton width="100%" height={140} />;
    }

    const buttonRefs = Array.from({ length: 2 }).map(() => useRef<HTMLButtonElement | null>(null));

    const circleComponent =
        <React.Fragment>
            <BrowserView>
                <VStack max gap='0' className={cls.wrapper} justify='around'>
                    <VStack max className={cls.border}>
                        <div className={cls.preTitle}>
                            <div className={cls.preTitle__border} />
                        </div>
                        <Text
                            textColorByTheme='history'
                            fontSize={56}
                            selectNone
                            title={t('title top')}
                            fontWeight='700'
                            lineHeight='57px'
                            className={cls.title}
                        />
                        <HStack max justify='center' align='center'>
                            <Circle
                                id={'history_assembled'}
                                titles={mockTitles}
                                pointCount={6}
                                radius={265}
                                extraRotation={60}
                                duration={0.6}
                                fullMode
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
                </VStack>
            </BrowserView>
            <MobileView>
                <div>MobileView</div>
            </MobileView>
        </React.Fragment>

    return (
        <>
            {circleComponent}
        </>
    );
});

export default HistoryAssembled;
