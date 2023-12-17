import React, { useEffect, useState, CSSProperties, MutableRefObject } from 'react';
import { Linear, gsap } from 'gsap';
import cls from './Circle.module.scss';
import {
    getAngleDiff,
    getCircleX,
    getCircleY,
    getCountByAngle,
    PointsCountType,
    rotateArray,
    toRadians,
    calculateMoves,
    keyframes,
    getInlineStyles,
    pointCountDefault,
    radiusDefault,
    extraRotationDefault,
    numberVisibilityDefault,
    durationDefault,
    titleOffsetDefault,
    fullModeDefault,
    mergeStyles,
} from '../helpers';

import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface CircleProps {
    // TODO: remove uniq id
    id: string;
    items?: any[] | undefined;
    titles?: React.ReactNode[] | undefined;
    loading?: boolean;
    pointCount: PointsCountType;
    radius?: number;
    extraRotation?: number;
    numberVisibility?: boolean;
    duration?: number;
    titleOffset?: string;
    fullMode?: boolean;
    buttonPlay?: MutableRefObject<HTMLElement | null> | null;
    buttonPlayReverse?: MutableRefObject<HTMLElement | null> | null;
}

export const Circle: React.FC<CircleProps> = ({
    id, items,
    titles, loading,
    pointCount = pointCountDefault,
    radius= radiusDefault,
    extraRotation = extraRotationDefault,
    numberVisibility = numberVisibilityDefault,
    duration= durationDefault,
    titleOffset= titleOffsetDefault,
    fullMode= fullModeDefault,
    buttonPlay,
    buttonPlayReverse
}) => {
    const [isAnimationPlaying, setAnimationPlaying] = useState(false);
    const [isInit, setInitPosition] = useState(false);
    const [points, setPoints] = useState<Array<number>>([0, 0])
    const [isForwardDirection, setForwardDirection] = useState<Boolean>(true)
    const [activeItem, setActiveItem] = useState<number>(0)

    useEffect(() => {
        const handleClick: EventListener = (event) => {
            const mouseEvent = event as MouseEvent;
            if (buttonPlay?.current && buttonPlay.current.contains(mouseEvent.target as Node)) {
                playClockwise();
            }
            if (buttonPlayReverse?.current && buttonPlayReverse?.current?.contains(mouseEvent.target as Node)) {
                playCounterClockwise();
            }
        };

        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [points]);


    const playClockwise = () => {
        const activeEl = activeItem;

        const arrRotated = rotateArray(points, 1);
        setPoints(arrRotated);

        if (titles?.length === activeEl + 1) {
            setActiveItem(0)
        } else {
            setActiveItem(activeEl + 1)
        }

        setAnimationPlaying(true);
        setForwardDirection(true)
    };

    const playCounterClockwise = () => {
        const activeEl = activeItem;

        const arrRotated = rotateArray(points, 1, true);
        setPoints(arrRotated);

        if (activeEl === 0) {
            const maxLength = titles?.length || 100;
            setActiveItem(maxLength - 1)
        } else {
            setActiveItem(activeEl - 1)
        }

        setAnimationPlaying(true);
        setForwardDirection(false)
    };

    const setInitiate = () => {
        setInitPosition(true);

        switch (pointCount) {
            case PointsCountType.TWO:
                setPoints([0 + extraRotation, 180 + extraRotation]);
                break;
            case PointsCountType.TREE:
                setPoints([0 + extraRotation, 120 + extraRotation, 240 + extraRotation]);
                break;
            case PointsCountType.FOUR:
                setPoints([0 + extraRotation, 90 + extraRotation, 180 + extraRotation, 270 + extraRotation]);
                break;
            case PointsCountType.FIVE:
                setPoints([0 + extraRotation, 72 + extraRotation, 144 + extraRotation, 216 + extraRotation, 288 + extraRotation]);
                break;
            case PointsCountType.SIX:
                setPoints([0 + extraRotation, 60 + extraRotation, 120 + extraRotation, 180 + extraRotation, 240 + extraRotation, 300 + extraRotation]);
                break;
            default:
                setPoints([0 + extraRotation, 180 + extraRotation]);
        }
    };

    useEffect(() => {
        setInitiate();
    }, []);

    useEffect(() => {
        let startPosition = 0
        let endPosition = 0

        if (isForwardDirection) {
            startPosition = 0
            endPosition = getAngleDiff(pointCount)
        } else {
            startPosition = getAngleDiff(pointCount) * 2
            endPosition = getAngleDiff(pointCount)
        }

        if (isAnimationPlaying) {
            const pointContainerTween = gsap.fromTo(
                `#pointContainer__${id}`,
                { rotation: startPosition },
                {
                    rotation: endPosition,
                    duration: duration,
                    ease: Linear.easeNone
                }
            );

            const createPointTween = (pointId: string, startPosition: number, endPosition: number, x: number, y: number) => {
                return gsap.fromTo(
                    `#${pointId}__${id}`,
                    { rotation: -startPosition },
                    {
                        rotation: -endPosition,
                        duration: duration,
                        ease: Linear.easeNone
                    }
                );
            };

            points.forEach((value, index) => {
                const idx = `point${index + 1}`
                createPointTween(
                    idx,
                    startPosition,
                    endPosition,
                    getCircleX(toRadians(points[index]), radius as number),
                    getCircleY(toRadians(points[index]), radius as number))
            })

            setTimeout(() => {
                setAnimationPlaying(false);
            }, duration * 1000);
        }
    }, [isAnimationPlaying, points]);

    useEffect(() => {
        const DURATION_INIT = 0.2;

        let startPosition = getAngleDiff(pointCount)
        let endPosition = getAngleDiff(pointCount)

        if (isInit) {
            const pointContainerTween = gsap.fromTo(
                `#pointContainer__${id}`,
                { rotation: startPosition },
                {
                    rotation: endPosition,
                    duration: DURATION_INIT,
                    ease: Linear.easeNone,
                }
            );

            const createPointTween = (pointId: string, startPosition: number, endPosition: number, x: number, y: number) => {
                return gsap.fromTo(
                    `#${pointId}__${id}`,
                    { rotation: startPosition, x: 0, y: -radius },
                    { rotation: -endPosition, x, y, duration: DURATION_INIT, ease: Linear.easeNone }
                );
            };

            points.forEach((value, index) => {
                const idx = `point${index + 1}`

                createPointTween(
                    idx,
                    startPosition,
                    endPosition,
                    getCircleX(toRadians(points[index]), radius as number),
                    -getCircleY(toRadians(points[index]), radius as number))
            })

            setInitPosition(false);
        }
    }, [isInit]);

    const handleClick = (count: number) => {
        const activePointElement = document.querySelectorAll(`.${cls.activePoint}`);

        let activeEl = 100;
        activePointElement.forEach((item) => {
            if (item.id.includes(id)) {
                activeEl = Number(item.firstElementChild?.innerHTML);
            }
        })

        setActiveItem(count - 1);

        if (activeEl === count) {
            return null
        }

        const pointContainer = document.getElementById(id)
        const statePoints: Array<number> = [];

        pointContainer?.childNodes.forEach((item) => {
            statePoints.push(Number(item.childNodes[0].childNodes[0].textContent))
        })

        const moves = calculateMoves(statePoints, count, activeEl)

        if (moves.direction) {
            const arrRotated = rotateArray(points, moves.movesCount);
            setPoints(arrRotated);
            setAnimationPlaying(true);
            setForwardDirection(true)
        } else {
            const arrRotated = rotateArray(points, moves.movesCount, true);
            setPoints(arrRotated);
            setAnimationPlaying(true);
            setForwardDirection(false)
        }
    }

    const renderPoints =
    <div id={id}>
        {points?.map((pointPosition, index) => {
            index = index + 1
            const count = getCountByAngle(pointPosition, pointCount, extraRotation);
            const pointId = `point${index}__${id}`

            const isActive = index === 2 && !isAnimationPlaying
            const isIncrease = index === 2 && isAnimationPlaying
            let isDecrease = true;
            if (isForwardDirection) {
                isDecrease = index === 1 && isAnimationPlaying
            } else {
                isDecrease = index === 3 && isAnimationPlaying
            }

            const inlineStyles = getInlineStyles(duration || 0.8, titleOffset || '0px');
            const pointStyles = mergeStyles(isIncrease ? inlineStyles.pointIncrease : '' as CSSProperties, isDecrease ? inlineStyles.pointDecrease : '' as CSSProperties)
            const numberStyles = mergeStyles(isIncrease ? inlineStyles.numberIncrease : '' as CSSProperties, isDecrease ? inlineStyles.numberDecrease : '' as CSSProperties)
            const titleStyles = mergeStyles(isIncrease ? inlineStyles.titleIncrease : '' as CSSProperties, isDecrease ? inlineStyles.titleDecrease : '' as CSSProperties)

            return (
                <div
                    key={pointId}
                    id={`pointContainer__${id}`}
                    className={cls.pointContainer}
                    // TODO: workaround
                    style={{ width: `${radius}px`, height: `${radius}px`, top:`${radius/2}px`, left: `${radius/2}px` }}
                >
                    <div id={pointId}
                         className={`
                             ${cls.point} 
                             ${isActive  ? cls.activePoint : ''}
                         `}
                         style={pointStyles}
                         onClick={() => handleClick(count)}
                    >
                        <div style={numberStyles} className={classNames(cls.number, {}, [numberVisibility ? cls.number_visible : undefined])}>
                            {count}
                        </div>
                        {
                            titles ? <div style={titleStyles} className={classNames(cls.title, {}, [isActive ? cls.title_visible : undefined])}>
                                {titles[count - 1]}
                            </div> : null
                        }
                    </div>
                    <style>{keyframes}</style>
                </div>
            )
        })}
    </div>

    return (
        <>
            <VStack gap='32'>
                <HStack gap='0'>
                    <div>
                        <div className={cls.circle} style={{ width: `${radius*2}px`, height: `${radius*2}px` }}>
                            <div className={classNames(cls.horizontalLine, {}, [fullMode ? cls.horizontalLine_full : undefined])}
                                 style={{ width: `${radius * 2}px`, left: `calc(50% - ${radius}px)` }}/>
                            <div className={classNames(cls.verticalLine, {}, [fullMode ? cls.verticalLine_full : undefined])}
                                 style={{ height: `${radius * 2}px`, top: `calc(50% - ${radius}px)` }} />
                            {renderPoints}
                        </div>
                    </div>
                </HStack>
            </VStack>
        </>
    );
};
