import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import cls from './Banner.module.scss';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Button } from '@/shared/ui/revamped/Button';
import { Icon } from '@/shared/ui/revamped/Icon';
import { Text } from '@/shared/ui/revamped/Text';
import BannerEarnings from '@/shared/assets/icons/bannerEarnings.png';
import Coin from '@/shared/assets/icons/coin.svg';
import CoinBig from '@/shared/assets/icons/coinBig.svg';

interface BannerCourseProps {
    className?: string;
}

const beUrl = 'https://raw.githubusercontent.com/Barklim/course/main/hostImg/bannerEarnings.png';
const coinBigUrl = 'https://raw.githubusercontent.com/Barklim/course/76e32b645ad404f3069bc0c96d2e37d9f6245792/hostImg/coinBig.svg';
const coinUrl = 'https://raw.githubusercontent.com/Barklim/course/76e32b645ad404f3069bc0c96d2e37d9f6245792/hostImg/coin.svg'

export const Banner = memo((props: BannerCourseProps) => {
    const { className } = props;
    const { t } = useTranslation('community');

    return (
        <div
            data-testid="BannerEarnings"
            className={classNames(cls.bannerContainer, {}, [className])}
        >
            <div className={cls.imgContainer}>
                <AppImage
                    fallback={<Skeleton width="100%" height={250} />}
                    src={beUrl}
                    className={cls.imgBack}
                />
            </div>
            <div className={cls.coinsContainer}>
                <div className={cls.firstCoinContainer}>
                    {/*<Icon*/}
                    {/*    Svg={CoinBig}*/}
                    {/*    width={170}*/}
                    {/*    height={150}*/}
                    {/*    className={cls.firstCoin}*/}
                    {/*/>*/}
                    <AppImage
                        fallback={<Skeleton  width={170} height={150} />}
                        src={coinBigUrl}
                        width={170}
                        height={150}
                        className={cls.firstCoin}
                    />
                </div>
                <div className={cls.secondCoinContainer}>
                    <AppImage
                        fallback={<Skeleton  width={170} height={150} />}
                        src={coinBigUrl}
                        width={170}
                        height={150}
                        className={cls.secondCoin}
                    />
                </div>
            </div>
            <div className={cls.banner}>
                <VStack justify='between' className={cls.bannerInner}>
                    <HStack gap="8">
                        <AppImage
                            fallback={<Skeleton height={20} width={23} />}
                            src={coinUrl}
                            height={20}
                            width={23}
                        />
                        <Text
                            fontSize={20}
                            size='l'
                            color='#fff'
                            selectNone
                            text={t('Blinks')}
                        ></Text>
                    </HStack>
                    <VStack gap='16'>
                        <Text className={classNames(cls.titleText, {}, [className])}
                              size={'l'}
                              color='#fff'
                              fontSize={50}
                              lineHeight={'50px'}
                              selectNone
                              title={t('LEARN & EARN\nBLINKS')}></Text>
                        <Button
                            fontSize={14}
                            height={42}
                            light
                            variant="filled"
                            fontWeight={700}
                        >
                            {t('See your earnings')}
                        </Button>
                    </VStack>
                </VStack>

            </div>
        </div>
    );
});
