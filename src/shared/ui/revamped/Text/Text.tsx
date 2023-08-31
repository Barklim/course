import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export type TextVariant = 'primary' | 'error' | 'accent';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 'xs' | 's' | 'm' | 'l' | 'xl';

interface TextProps {
    className?: string;
    title?: string;
    color?: string;
    text?: string;
    variant?: TextVariant;
    align?: TextAlign;
    size?: TextSize;
    fontSize?: number;
    bold?: boolean;
    minor?: boolean;
    selectNone?: boolean;
    titleFont?: boolean;
    textFont?: boolean;
    lineHeight?: string;
    'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4';

const mapSizeToClass: Record<TextSize, string> = {
    xs: cls.size_xs,
    s: cls.size_s,
    m: cls.size_m,
    l: cls.size_l,
    xl: cls.size_xl,
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    xs: 'h4',
    s: 'h3',
    m: 'h2',
    l: 'h1',
    xl: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        color,
        variant = 'primary',
        align = 'left',
        size = 'm',
        fontSize,
        bold,
        minor,
        selectNone,
        titleFont,
        textFont,
        lineHeight,
        'data-testid': dataTestId = 'Text',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeClass = mapSizeToClass[size];

    const additionalClasses = [className, cls[variant], cls[align], sizeClass];

    return (
        <div
            className={classNames(
                cls.Text,
                {
                    [cls.bold]: bold,
                    [cls.minor]: minor,
                    [cls.selectNone]: selectNone,
                    [cls.textFontFamily]: text,
                    [cls.titleFontFamily]: title,
                    [cls.titleFont]: titleFont,
                    [cls.textFont]: textFont
                },
                additionalClasses,
            )}
        >
            {title && (
                <HeaderTag
                    className={cls.title}
                    data-testid={`${dataTestId}.Header`}
                    style={{ fontSize: fontSize, color: color ? color : undefined, lineHeight: lineHeight }}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                    className={cls.text} data-testid={`${dataTestId}.Paragraph`}
                    style={{ fontSize: fontSize, color: color, lineHeight: lineHeight }}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
