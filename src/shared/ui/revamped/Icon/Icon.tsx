import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    setActive?: boolean;
    isActive?: boolean;
    toolbar?: boolean;
    color?: string;
}

interface NonClickableIconProps extends IconBaseProps {
    clickable?: false;
}

interface ClickableBaseProps extends IconBaseProps {
    clickable: true;
    onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableBaseProps;

export const Icon = memo((props: IconProps) => {
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
        ...otherProps
    } = props;

    const icon = (
        <Svg
            className={classNames(cls.Icon, {
                [cls.setActive]: setActive,
                [cls.isActive]: isActive,
                [cls.toolBar]: toolbar,
            }, [className])}
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
                type="button"
                className={cls.button}
                onClick={props.onClick}
                style={{ height, width }}
            >
                {icon}
            </button>
        );
    }

    return icon;
});
