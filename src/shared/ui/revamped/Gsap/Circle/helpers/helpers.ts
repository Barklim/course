// https://codepen.io/mikeK/pen/XVZMBN
// https://gsap.com/community/forums/topic/17666-animating-circle-shape/
// https://gsap.com/community/forums/topic/7573-tween-around-circle/

export enum PointsCountType {
    TWO = 2,
    TREE = 3,
    FOUR = 4,
    FIVE = 5,
    SIX = 6,
}

export function toRadians(angle: number) {
    return angle * (Math.PI / 180);
}

export function getCircleY(radians: number, radius: number) {
    return Math.sin(radians) * radius;
}

export function getCircleX(radians: number, radius: number) {
    return Math.cos(radians) * radius;
}

export function getAngleDiff(pointCount: PointsCountType) {
    const angleMap: Record<PointsCountType, number> = {
        [PointsCountType.SIX]: 60,
        [PointsCountType.FIVE]: 72,
        [PointsCountType.FOUR]: 90,
        [PointsCountType.TREE]: 120,
        [PointsCountType.TWO]: 180,
    };
    return angleMap[pointCount] || 100;
}

export function getCountByAngle(angle: number, pointCount: PointsCountType) {
    const countMap: Record<PointsCountType, Record<number, number>> = {
        [PointsCountType.SIX]: { 0: 1, 60: 2, 120: 3, 180: 4, 240: 5, 300: 6 },
        [PointsCountType.FIVE]: { 0: 1, 72: 2, 144: 3, 216: 4, 288: 5 },
        [PointsCountType.FOUR]: { 0: 1, 90: 2, 180: 3, 270: 4 },
        [PointsCountType.TREE]: { 0: 1, 120: 2, 240: 3 },
        [PointsCountType.TWO]: { 0: 1, 180: 2 },
    };
    return countMap[pointCount]?.[angle] || 100;
}

export function rotateArray(arr: any, positions: any, reverse = false) {
    const shift = positions % arr.length;
    const rotatedArray = reverse
        ? [...arr.slice(-shift), ...arr.slice(0, -shift)]
        : [...arr.slice(shift), ...arr.slice(0, shift)];
    return rotatedArray;
}