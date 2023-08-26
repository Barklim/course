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

const imgFront = "https://s3-alpha-sig.figma.com/img/89aa/e42d/86afcb828ebc8e67fe140ddb509af946?Expires=1693785600&Signature=Z14NH3UhaPmsUD83kA~tgBP6zCkJspnTGaVfb2tVFYPJNIapePNCOW86X3h7dLG5pF2e~TRLK1YzvekaB9Kiu9UEvRYsF~HD9IlCwYJ6P7CuHM4mv0-W-x2j8X~Ot2s7lzi3H7nyMRqqXXnX6QOyJ5OKqMXouS1si956HGUcI~PLMHG9H1f1OUh1yoIM4MUEKlZGyBHp64cFH76joq7q~3MyzCXLHLoflrikyn3mbf5zINmkDKBmOZeOG-oGVyzmnluJ1YLUQZi4XvgsIHS12Maq1WGj-rkLD8DtSgSE6snkJpM7LZ5jg9kCnWSGG-RKLn4csMtWc-gejxD-IidaNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
const imgBack = "https://s3-alpha-sig.figma.com/img/0f75/5b31/76427bea917c1742d5c7bc4fb8d660be?Expires=1693785600&Signature=E9Mv-JbxBPJptMlU0gJq8uAft8CVidIXPCILivAWGDSyO0hayQsWX14cggvqYlHo47RrbWm0h8avW2eDb8ZOGfNYrP1DeACorXRa58~RZaVLUTnBwgkcUZmaOd-azojqf0L-BvNiII4cG09ZsjSmvA~RHAwW9QOxQNcajCc16xPSyn1yIZMKfYTbpHyAIXl-hKN6NATuDU-Yo6OzzLy-IMFp~Ych~qvxN29CwaY3wO3E3x4qT-JdYQl2hzVk81OaGPFFENVCIFEPXbjtPd9SeHYkJaR6~zpr8x1PmNt1hFmQgT-i5H7Ow8PKINq5IgRZwB9JcaeA-jkKlWn~3Lj5yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"

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
