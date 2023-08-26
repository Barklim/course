import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '10' | '16' | '24';
export type CardBorder = 'round' | 'normal' | 'partial';
export type CardBorderPadding = '12' | '20';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: CardVariant;
    max?: boolean;
    padding?: CardPadding;
    border?: CardBorder;
    borderRadius?: CardBorderPadding;
    cardColor?: any;
    // todo удалить, дубликат max
    fullWidth?: boolean;
    fullHeight?: boolean;
}

const mapBorderRadiusToClass: Record<CardBorderPadding, string> = {
    '12': 'border_12',
    '20': 'border_20'
};

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'gap_0',
    '8': 'gap_8',
    '10': 'gap_10',
    '16': 'gap_16',
    '24': 'gap_24',
};

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        variant = 'normal',
        max,
        padding = '8',
        border = 'normal',
        borderRadius = '12',
        cardColor,
        fullWidth,
        fullHeight,
        ...otherProps
    } = props;

    const paddingClass = mapPaddingToClass[padding];
    const borderRadiusClass = mapBorderRadiusToClass[borderRadius];

    return (
        <div
            className={classNames(
                cls.Card,
                {
                    [cls.max]: max,
                    [cls.fullHeight]: fullHeight,
                    [cls.fullWidth]: fullWidth,
                },
                [
                    className,
                    cls[variant],
                    cls[paddingClass],
                    cls[border],
                    cls[borderRadiusClass]
                ],
            )}
            style={{ background: cardColor}}
            {...otherProps}
        >
            {children}
        </div>
    );
});
