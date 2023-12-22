import React, { memo, useEffect, useRef, useState } from 'react';
// import { useGetHistory, useHistory } from '../../api/historyGsapApi';
import { HistorySwipeButton } from '../HistorySwipeButton/HistorySwipeButton';
import { HistoryCarousel } from '../HistoryCarousel/HistoryCarousel';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Circle } from '@/shared/ui/revamped/Gsap';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import cls from './HistoryAssembled.module.scss';
import { mockIntervalsEl6, mockTitleAssembled } from '@/shared/const/mock';
import { Text } from '@/shared/ui/revamped/Text';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { LOCAL_STORAGE_SIDEBAR_STATE } from '@/shared/const/localstorage';

export interface HistoryAssembledProps {
    className?: string;
}

const mockTitles = mockTitleAssembled.map((title) => (<Text textColorByTheme='history' fontSize={20} selectNone lineHeight='30px' fontWeight='700' text={title} />));

const HistoryAssembled = memo((props: HistoryAssembledProps) => {
    const { className } = props;
    const { t } = useTranslation('history');
    const [activeItem, setActiveItem] = useState<number>(0)

    const isLoading = false;
    if (isLoading) {
        return <Skeleton width="100%" height={140} />;
    }

    const buttonRefs = Array.from({ length: 2 }).map(() => useRef<any | null>(null));

    const isFirstItem = activeItem === 0;
    const isLastItem = activeItem + 1 === mockTitles.length;

    const DURATION = 0.6;

    // TODO: useWidth hook.
    const browserWidth = document.body.clientWidth;
    const radius = browserWidth > 1440 ? 265 : Math.round(browserWidth/6)

    const [loading1, setLoading] = useState(localStorage.getItem(LOCAL_STORAGE_SIDEBAR_STATE) === "false");

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 700);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    const circleComponent = (activeItem: number, setActiveItem: any) => (
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
                                intervals={mockIntervalsEl6}
                                pointCount={mockTitles.length}
                                radius={radius}
                                extraRotation={60}
                                duration={DURATION}
                                fullMode
                                activeItem={activeItem}
                                setActiveItem={setActiveItem}
                                buttonPlay={buttonRefs[0]}
                                buttonPlayReverse={buttonRefs[1]}
                                loading={loading1}
                            />
                        </HStack>
                        <VStack gap='32' className={cls.buttonsWrapper} max>
                            <Text textColorByTheme='history' fontSize={14} selectNone lineHeight='0px' fontWeight='400' text={`0${activeItem + 1}/06`} className={cls.buttonsTitle} />
                            <HStack gap='16' align='end' justify='end' className={cls.buttons}>
                                <HistorySwipeButton left ref={ isFirstItem ? null : buttonRefs[0]} disabled={isFirstItem} />
                                <HistorySwipeButton right ref={isLastItem ? null : buttonRefs[1]} disabled={isLastItem} />
                            </HStack>
                        </VStack>
                    </VStack>
                    <VStack className={cls.border}>
                        <HistoryCarousel activeItem={activeItem + 1} duration={DURATION} loading={loading1} />
                    </VStack>
                </VStack>
            </BrowserView>
            <MobileView>
                <div>MobileView</div>
            </MobileView>
        </React.Fragment>
    );

    return (
        <>
            {circleComponent(activeItem, setActiveItem)}
        </>
    );
});

export default HistoryAssembled;
