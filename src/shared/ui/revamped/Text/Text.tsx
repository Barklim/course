import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export type TextVariant = 'primary' | 'error' | 'accent';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 'xs' | 's' | 'm' | 'l' | 'xl';

export type TextColorByTheme = 'normal' | 'inverse' | 'purple' | 'history';

interface TextProps {
    className?: string;
    title?: string;
    color?: string;
    textColorByTheme?: TextColorByTheme;
    text?: string;
    variant?: TextVariant;
    align?: TextAlign;
    size?: TextSize;
    fontSize?: number;
    bold?: boolean;
    minor?: boolean;
    selectNone?: boolean;
    titleFont?: boolean;
    fontWeight?: string | number;
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
        textColorByTheme = 'normal',
        variant = 'primary',
        align = 'left',
        size = 'm',
        fontSize,
        bold,
        minor,
        selectNone,
        titleFont,
        fontWeight,
        textFont,
        lineHeight,
        'data-testid': dataTestId = 'Text',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeClass = mapSizeToClass[size];

    const additionalClasses = [className, cls[variant], cls[textColorByTheme], cls[align], sizeClass];

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
                    [cls.textFont]: textFont,
                    [cls.historyTheme]: textColorByTheme === 'history',
                },
                additionalClasses,
            )}
        >
            {title && (
                <HeaderTag
                    className={cls.title}
                    data-testid={`${dataTestId}.Header`}
                    style={{
                        fontSize: fontSize,
                        color: color ? color : undefined,
                        lineHeight: lineHeight,
                        fontWeight: fontWeight ? fontWeight : undefined
                    }}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                    className={cls.text} data-testid={`${dataTestId}.Paragraph`}
                    style={{
                        fontSize: fontSize,
                        color: color,
                        lineHeight: lineHeight,
                        fontWeight: fontWeight ? fontWeight : undefined
                    }}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
