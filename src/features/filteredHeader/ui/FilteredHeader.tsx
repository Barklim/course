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

    return (
        <div className={cls.wrapper}>
            <HStack justify="between">
                <AppLink to={getRouteAcademy()} className={cls.navLink}>
                    <Button variant="borderNone" fontSize={14} addonLeft={
                        <Icon
                            data-testid="carousel-see-all"
                            className={cls.academyIcon}
                            Svg={ArrowIcon}
                            setActive
                            color={'#fff'}
                        />
                    }><Text fontSize={32} bold color={'#fff'} text={t('Academy')} /></Button>
                </AppLink>
                <Button
                    height={42}
                    light
                    variant="filled"
                >
                    <Text
                        fontSize={17}
                        bold
                        color={'#000'}
                        text={t('Skip')} />
                </Button>
            </HStack>
        </div>
    );
});
