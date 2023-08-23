import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToTopButton.module.scss';
import { Icon } from '@/shared/ui/revamped/Icon';
import { Icon as IconDeprecated } from '@/shared/ui/redesigned/Icon';
import CircleIcon from '@/shared/assets/icons/circle-up.svg';
import CircleIconRevamped from '@/shared/assets/icons/circle-up-revamped.svg';
import { ToggleFeatures } from '@/shared/lib/features';

interface ScrollToTopButtonProps {
    className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
    const { className } = props;

    const onCLick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <ToggleFeatures
            feature="isAppRevamped"
            on={
                <Icon
                    Svg={CircleIconRevamped}
                    clickable
                    onClick={onCLick}
                    width={32}
                    height={32}
                    toolbar
                    className={classNames(cls.ScrollToTopButton, {}, [className])}
                />
            }
            off={
                <IconDeprecated
                    Svg={CircleIcon}
                    clickable
                    onClick={onCLick}
                    width={32}
                    height={32}
                    className={classNames(cls.ScrollToTopButton, {}, [className])}
                />
            }
        />
    );
});
