import React from 'react';
import cls from './FilteredHeader.module.scss';
import { useTranslation } from 'react-i18next';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { getRouteAcademy } from '@/shared/const/router';
import { Button } from '@/shared/ui/revamped/Button';
import { Icon } from '@/shared/ui/revamped/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { Text } from '@/shared/ui/revamped/Text';

export const FilteredHeader = React.memo(() => {
    const { t } = useTranslation('');
    const categories = ['All', 'Stocks', 'ETFs', 'Crypto', 'NFTs'];

    return (
        <div className={cls.wrapper}>
            <HStack justify="between">
                <AppLink to={getRouteAcademy()} className={cls.navLink}>
                    <Button variant="borderNone" fontSize={14} addonLeft={
                        <Icon
                            data-testid="filtered-header"
                            className={cls.academyIcon}
                            Svg={ArrowIcon}
                        />
                    }><Text fontSize={32} fontWeight={400} text={t('Academy')} /></Button>
                </AppLink>
                <HStack gap={'8'}>
                    {categories.map((category, index) => (
                        <Button
                            key={index}
                            height={42}
                            padding={'12px'}
                            borderRadius={22}
                        >
                        <Text
                            fontSize={14}
                            text={t(category)} />
                        </Button>
                    ))}
                </HStack>
            </HStack>
        </div>
    );
});
