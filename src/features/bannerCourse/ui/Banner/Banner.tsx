import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import cls from './Banner.module.scss';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Button } from '@/shared/ui/revamped/Button';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Text } from '@/shared/ui/revamped/Text';
import BulbIcon from '@/shared/assets/icons/bulb.svg';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface BannerCourseProps {
    className?: string;
}

const imgFront = "https://github.com/Barklim/course/blob/main/hostImg/bannerCourse1.jpeg?raw=true"
const imgBack = "https://github.com/Barklim/course/blob/main/hostImg/bannerCourse2.jpeg?raw=true"

export const Banner = memo((props: BannerCourseProps) => {
    const { className } = props;
    const { t } = useTranslation('community');

    const children = ( remainingTime: number ) => {
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60

        return (
            <div className={cls.countdownInner}>
                <div className={cls.countdownDigits}>{minutes}:{seconds}</div>
                <div className={cls.countdownText}>Time Left</div>
            </div>
        );
    }

    return (
        <div
            data-testid="BannerCourse"
            className={classNames(cls.banner, {}, [className])}
        >
            <div className={cls.countdownContainer}>
                <CountdownCircleTimer
                    isPlaying
                    onComplete={() => {
                        return { shouldRepeat: true, delay: 1.5 }
                    }}
                    duration={60*3}
                    size={111}
                    strokeWidth={4}
                    rotation={'counterclockwise'}
                    trailColor={'#313131'}
                    colors={['#6FD964', '#4db742']}
                    colorsTime={[2, 1]}
                >
                    {({ remainingTime }) => children(remainingTime)}
                </CountdownCircleTimer>
            </div>

            <HStack justify="between" align="unset">
                <VStack justify="between">
                    <VStack align="start" className={classNames(cls.textContainer, {}, [className])}>
                        <Text className={classNames(cls.titleText, {}, [className])}
                              size={'xl'}
                              selectNone
                              title={t('What is the blockchian?')}></Text>
                        <Text className={classNames(cls.subText, {}, [className])}
                              size={'s'}
                              selectNone
                              text={t('DiamText')}></Text>
                    </VStack>
                    <HStack align="start" className={cls.buttonsContainer}>
                        <Button
                            fontSize={14}
                            height={42}
                            dark
                            variant="filled"
                            className={cls.buttonDark}
                            addonLeft={<Icon Svg={BulbIcon} />}
                        >
                            {t('Suggestions')}
                        </Button>
                        <Button
                            fontSize={14}
                            height={42}
                            light
                            variant="filled"
                            fontWeight={700}
                            className={cls.buttonLight}
                        >
                            {t('Answer')}
                        </Button>
                    </HStack>
                </VStack>

                <div className={cls.imgContainer}>
                    <AppImage
                        fallback={<Skeleton width="100%" height={250} />}
                        src={imgFront}
                        className={cls.imgFront}
                    />
                    <AppImage
                        fallback={<Skeleton width="100%" height={250} />}
                        src={imgBack}
                        className={cls.imgBack}
                    />
                </div>
            </HStack>
        </div>
    );
});
