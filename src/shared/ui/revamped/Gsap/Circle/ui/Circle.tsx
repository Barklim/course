import React, { useEffect, useState } from 'react';
import { Linear, gsap } from 'gsap';
import cls from './Circle.module.scss';
import {
    getAngleDiff, getCircleX, getCircleY, getCountByAngle,
    PointsCountType,
    rotateArray,
    toRadians,
} from '@/shared/ui/revamped/Gsap/Circle/helpers/helpers';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

interface CircleProps {
    id: string;
    items: any[] | undefined;
    loading: boolean;
    pointCount: PointsCountType;
    radius?: number
}

export const Circle: React.FC<CircleProps> = ({ id, items, loading, pointCount = 2, radius= 125 }) => {
    const [isAnimationPlaying, setAnimationPlaying] = useState(false);
    const [isInit, setInitPosition] = useState(false);
    const [points, setPoints] = useState<Array<number>>([0, 0])
    const [isForwardDirection, setForwardDirection] = useState<Boolean>(true)

    const DURATION = 0.8;

    const play = () => {
        const arrRotated = rotateArray(points, 1);
        setPoints(arrRotated);

        setAnimationPlaying(true);
        setForwardDirection(true)
    };

    const playReverse = () => {
        const arrRotated = rotateArray(points, 1, true);
        setPoints(arrRotated);

        setAnimationPlaying(true);
        setForwardDirection(false)
    };

    const setInitiate = () => {
        setInitPosition(true);

        switch (pointCount) {
            case PointsCountType.TWO:
                setPoints([0, 180]);
                break;
            case PointsCountType.TREE:
                setPoints([0, 120, 240]);
                break;
            case PointsCountType.FOUR:
                setPoints([0, 90, 180, 270]);
                break;
            case PointsCountType.FIVE:
                setPoints([0, 72, 144, 216, 288]);
                break;
            case PointsCountType.SIX:
                setPoints([0, 60, 120, 180, 240, 300]);
                break;
            default:
                setPoints([0, 180]);
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
                    duration: DURATION,
                    ease: Linear.easeNone
                }
            );

            const createPointTween = (pointId: string, startPosition: number, endPosition: number, x: number, y: number) => {
                return gsap.fromTo(
                    `#${pointId}__${id}`,
                    { rotation: -startPosition },
                    {
                        rotation: -endPosition,
                        duration: DURATION,
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
            }, DURATION * 1000);
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

    const renderPoints =
    <>
        {points?.map((pointPosition, index) => {
            index = index + 1
            const count = getCountByAngle(pointPosition, pointCount);
            const pointId = `point${index}__${id}`

            return (
                <div
                    id={`pointContainer__${id}`}
                    className={cls.pointContainer}
                    style={{ width: `${radius*2}px`, height: `${radius*2}px` }}
                >
                    <div id={pointId} className={cls.point}>
                        <div className={cls.number}>{count}</div>
                    </div>
                </div>
            )
        })}
    </>

    return (
        <>
            <VStack gap='8'>
                <div className={cls.circleContainer}>
                    <div className={cls.circle}
                         style={{ width: `${radius*2}px`, height: `${radius*2}px` }}>
                        <div className={cls.horizontalLine} style={{ width: `${radius*2}px`, left: `calc(50% - ${radius}px)` }}></div>
                        <div className={cls.verticalLine} style={{ height: `${radius*2}px`, top: `calc(50% - ${radius}px)` }}></div>
                        {renderPoints}
                    </div>
                </div>
                <HStack gap='8'>
                    <button onClick={playReverse}>👈</button>
                    <button onClick={play}>👉</button>
                </HStack>

            </VStack>
        </>
    );
};
