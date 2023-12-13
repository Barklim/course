import React, { CSSProperties } from 'react';

interface Animation {
    name: string;
    styles: string;
}

const generateKeyframes = (animations: Animation[]) => {
    return animations.map(({ name, styles }) => `
    @keyframes ${name} {
      ${styles}
    }
  `).join('');
};

export function mergeStyles(...styles: CSSProperties[]): CSSProperties {
    return styles.reduce((acc, style) => ({ ...acc, ...style }), {});
}

export const keyframes = generateKeyframes([
    {
        name: 'pointIncreaseAnimation',
        styles: `
            to {
                opacity: 0 !important;
                width: 56px;
                height: 56px;
                left: calc(50% - 28px);
                top: calc(50% - 28px);
                border: 1px solid #42567a;
                background: #fff;
            }
      `,
    },
    {
        name: 'opacityIncreaseAnimation',
        styles: `
            to {
                opacity: 1;
            }
      `,
    },
    {
        name: 'titleIncreaseAnimation',
        styles: `
            to {
                opacity: 1;
                left: 60px;
            }
      `,
    },


    {
        name: 'pointDecreaseAnimation',
        styles: `
            to {
                width: 6px;
                height: 6px;
                left: calc(50% - 2px);
                top: calc(50% - 2px);
                
                border: 1px solid #42567a;
                background: #fff;
            }
      `,
    },
    {
        name: 'opacityDecreaseAnimation',
        styles: `
            to {
                opacity: 0;
            }
      `,
    },
    {
        name: 'titleDecreaseAnimation',
        styles: `
            to {
                opacity: 0;
                left: 40px;
            }
      `,
    },
]) as string;

export type TInlineStyles = {
    pointIncrease: CSSProperties,
    numberIncrease: CSSProperties,
    titleIncrease: CSSProperties,
    pointDecrease: CSSProperties,
    numberDecrease: CSSProperties,
    titleDecrease: CSSProperties,
}

export const getInlineStyles = (duration: number): TInlineStyles => {
    const pointIncrease: CSSProperties = {
        width: '6px',
        height: '6px',
        animation: `pointIncreaseAnimation ${duration + 0.1}s ease`,
    };
    const numberIncrease: CSSProperties = {
        opacity: 0,
        animation: `opacityIncreaseAnimation ${duration + 0.1}s ease`,
    };
    const titleIncrease: CSSProperties = {
        opacity: 0,
        animation: `titleIncreaseAnimation ${duration + 0.1}s ease`,
    };

    const pointDecrease: CSSProperties = {
        width: '56px',
        height: '56px',
        left: 'calc(50% - 28px)',
        top: 'calc(50% - 28px)',
        border: '1px solid #42567a',
        animation: `pointDecreaseAnimation ${duration + 0.1}s ease`
    };
    const numberDecrease: CSSProperties = {
        opacity: 1,
        animation: `opacityDecreaseAnimation ${duration + 0.1}s ease`,
    };
    const titleDecrease: CSSProperties = {
        opacity: 1,
        left: '60px',
        animation: `titleDecreaseAnimation ${duration + 0.1}s ease`,
    };

    return {
        pointIncrease: pointIncrease,
        numberIncrease: numberIncrease,
        titleIncrease: titleIncrease,
        pointDecrease: pointDecrease,
        numberDecrease: numberDecrease,
        titleDecrease: titleDecrease
    }
}