import React, { memo, useRef } from 'react';
// import { useGetHistory, useHistory } from '../../api/historyGsapApi';
import { HistorySwipeButton } from '../HistorySwipeButton/HistorySwipeButton';
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

    const buttonRefs = Array.from({ length: 2 }).map(() => useRef<any | null>(null));

    // TODO: useWidth hook.
    const browserWidth = document.body.clientWidth;
    const radius = browserWidth > 1440 ? 265 : Math.round(browserWidth/6)

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
                                radius={radius}
                                extraRotation={60}
                                duration={0.6}
                                fullMode
                                buttonPlay={buttonRefs[0]}
                                buttonPlayReverse={buttonRefs[1]}
                            />
                        </HStack>
                        <VStack gap='32' className={cls.buttonsWrapper} max>
                            <Text textColorByTheme='history' fontSize={14} selectNone lineHeight='0px' fontWeight='400' text={'06/06'} className={cls.buttonsTitle} />
                            <HStack gap='16' align='end' justify='end' className={cls.buttons}>
                                <HistorySwipeButton left ref={buttonRefs[0]} />
                                <HistorySwipeButton right ref={buttonRefs[1]} disabled />
                            </HStack>
                        </VStack>
                    </VStack>
                    <VStack className={cls.border}>
                        <div>Carousel</div>
                        <div>123</div>
                        <div>123</div>
                        <div>123</div>
                    </VStack>
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
