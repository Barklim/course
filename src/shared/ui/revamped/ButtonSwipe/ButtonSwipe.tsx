import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ButtonSwipe.module.scss';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { Icon } from '@/shared/ui/revamped/Icon';

interface HistoryCarouselProps {
    className?: string;
    left?: boolean;
    right?: boolean;
    disabled?: boolean;
    hidden?: boolean;
    offset?: number;
    width?: number;
    height?: number;
}

export const ButtonSwipe = memo(React.forwardRef((props: HistoryCarouselProps, ref) => {
    const {
        className,
        left = false,
        right = false,
        disabled = false,
        hidden = false,
        offset = 0,
        width = 38,
        height = 38,
        ...otherProps
    } = props;

    const leftCls = left ? cls.icon_left : undefined;
    const rightCls = right ? cls.icon_right : undefined;
    const disabledCls = disabled ? cls.icon_disabled : undefined;
    const additionalClasses = [className, leftCls, rightCls, disabledCls];

    const disabledContainerCls = disabled ? cls.iconContainer_disabled : undefined;
    const hiddenCls = hidden ? cls.iconContainer_hidden : undefined;
    const additionalContainerClasses = [className, disabledContainerCls, hiddenCls];

    const iconContainerStyle: React.CSSProperties = {
        left: left ? `-${offset}px` : `${offset}px`,
        position: 'absolute'
    };

    const icon = (
        <div className={classNames(cls.iconContainer, {}, additionalContainerClasses)} style={iconContainerStyle}>
            <Icon
                ref={ref as React.MutableRefObject<HTMLButtonElement | null>}
                data-testid="buttonSwipe"
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
