import React, { useEffect, useState } from 'react';
import { Linear, gsap } from 'gsap';
import cls from './Circle.module.scss';
import {
    getAngleDiff, getCircleX, getCircleY, getCountByAngle,
    PointsCountType,
    rotateArray,
    toRadians,
    calculateMoves,
} from '@/shared/ui/revamped/Gsap/Circle/helpers/helpers';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';

interface CircleProps {
    id: string;
    items?: any[] | undefined;
    titles?: string[] | undefined;
    loading?: boolean;
    pointCount: PointsCountType;
    radius?: number;
    extraRotation?: number;
    numberVisibility?: boolean;
    duration?: number;
}

export const Circle: React.FC<CircleProps> = ({ id, items, titles, loading, pointCount = 2, radius= 90 , extraRotation = 45, numberVisibility = false, duration= 0.8}) => {
    const [isAnimationPlaying, setAnimationPlaying] = useState(false);
    const [isInit, setInitPosition] = useState(false);
    const [points, setPoints] = useState<Array<number>>([0, 0])
    const [isForwardDirection, setForwardDirection] = useState<Boolean>(true)
    const [activeItem, setActiveItem] = useState<number>(0)

    const play = (activeEl: number) => {
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

    const playReverse = (activeEl: number) => {
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
        const DURATION = 0.0;

        let startPosition = getAngleDiff(pointCount)
        let endPosition = getAngleDiff(pointCount)

        if (isInit) {
            const pointContainerTween = gsap.fromTo(
                `#pointContainer__${id}`,
                { rotation: startPosition },
                {
                    rotation: endPosition,
                    duration: DURATION,
                    ease: Linear.easeNone,
                }
            );

            const createPointTween = (pointId: string, startPosition: number, endPosition: number, x: number, y: number) => {
                return gsap.fromTo(
                    `#${pointId}__${id}`,
                    { rotation: startPosition, x: 0, y: -radius },
                    { rotation: -endPosition, x, y, duration: DURATION, ease: Linear.easeNone }
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

            return (
                <div
                    key={pointId}
                    id={`pointContainer__${id}`}
                    className={cls.pointContainer}
                    // TODO: workaround
                    style={{ width: `${radius}px`, height: `${radius}px`, top:`${radius/2}px`, left: `${radius/2}px` }}
                >
                    <div id={pointId}
                         // TODO: when clicked point
                         // className={`
                         //     ${cls.point}
                         //     ${isHovered ? cls.pointHovered : ''}
                         //     // ${index === 2 ? cls.activePoint : ''}
                         //     // Show all when moving
                         //     // ${isAnimationPlaying  ? cls.activePoint : ''}
                         // `}
                         className={`
                             ${cls.point} 
                             ${isIncrease ? cls.increase : ''} 
                             ${isActive  ? cls.activePoint : ''}
                             ${isDecrease  ? cls.decrease : ''}
                         `}
                         onClick={() => handleClick(count)}
                    >
                        <div className={classNames(cls.number, {}, [numberVisibility ? cls.number_visible : undefined])}>
                            {count}
                        </div>
                        {
                            titles ? <div className={classNames(cls.title, {}, [isActive ? cls.title_visible : undefined, isActive ? cls.decrease1 : undefined])}>{titles[count - 1]}</div> : null
                        }
                    </div>
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
                            <div className={cls.horizontalLine} style={{ width: `${radius*2}px`, left: `calc(50% - ${radius}px)` }}></div>
                            <div className={cls.verticalLine} style={{ height: `${radius*2}px`, top: `calc(50% - ${radius}px)` }}></div>
                            {renderPoints}
                        </div>
                    </div>
                </HStack>
                <HStack gap='8'>
                    <button onClick={() => playReverse(activeItem)}>👈</button>
                    <button onClick={() => play(activeItem)}>👉</button>
                </HStack>
            </VStack>
        </>
    );
};
