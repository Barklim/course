import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './HistorySwipeButton.module.scss';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { Icon } from '@/shared/ui/revamped/Icon';

interface HistorySwipeProps {
    className?: string;
    left?: boolean;
    right?: boolean;
    disabled?: boolean;
    width?: number;
    height?: number;
}

export const HistorySwipeButton = memo(React.forwardRef((props: HistorySwipeProps, ref) => {
    const {
        className,
        left = false,
        right = false,
        disabled = false,
        width = 38,
        height = 38,
        ...otherProps
    } = props;

    const leftCls = left ? cls.icon_left : undefined;
    const rightCls = right ? cls.icon_right : undefined;
    const disabledCls = disabled ? cls.icon_disabled : undefined;
    const additionalClasses = [className, leftCls, rightCls, disabledCls];

    const disabledContainerCls = disabled ? cls.iconContainer_disabled : undefined;
    const additionalContainerClasses = [className, disabledContainerCls];

    // Butot: 50x50 Desktop 25x25 Mobile
    // Icon: 16x16 Desktop 8x8 Mobile
    const icon = (
        <div className={classNames(cls.iconContainer, {}, additionalContainerClasses)}>
            <Icon
                ref={ref as React.MutableRefObject<HTMLButtonElement | null>}
                data-testid="circleSwipe"
                Svg={ArrowIcon}
                clickable
                className={classNames(cls.icon, {}, additionalClasses)}
                width={width}
                height={height}
                {...otherProps}
            />
        </div>
    );

    return icon;
}));
