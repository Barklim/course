import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import { TextColorByTheme } from '@/shared/ui/revamped/Text';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    setActive?: boolean;
    isActive?: boolean;
    toolbar?: boolean;
    color?: string;
    textColorByTheme?: TextColorByTheme;
}

interface NonClickableIconProps extends IconBaseProps {
    clickable?: false;
}

interface ClickableBaseProps extends IconBaseProps {
    clickable: true;
    onClick?: () => void;
}

type IconProps = NonClickableIconProps | ClickableBaseProps;

export const Icon = memo(React.forwardRef((props: IconProps, ref) => {
    const {
        className,
        Svg,
        width = 32,
        height = 32,
        clickable,
        setActive,
        isActive,
        toolbar,
        color,
        textColorByTheme = 'normal',
        ...otherProps
    } = props;

    const additionalClasses = [className, cls[textColorByTheme]];

    const icon = (
        <Svg
            className={classNames(
                cls.Icon, {
                    [cls.setActive]: setActive,
                    [cls.isActive]: isActive,
                    [cls.toolBar]: toolbar,
                }, additionalClasses
            )}
            width={width}
            height={height}
            {...otherProps}
            onClick={undefined}
            style={{ color: color }}
        />
    );

    if (clickable) {
        return (
            <button
                ref={ref as React.MutableRefObject<HTMLButtonElement | null>}
                type="button"
                className={cls.button}
                onClick={props.onClick ? props.onClick : undefined}
                style={{ height, width }}
            >
                {icon}
            </button>
        );
    }

    return icon;
}));
