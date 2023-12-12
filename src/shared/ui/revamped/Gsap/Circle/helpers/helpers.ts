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

export function getCountByAngle(angle: number, pointCount: PointsCountType, extraRotation: number) {
    const adjustedAngle = angle;

    const countMap: Record<PointsCountType, Record<number, number>> = {
        [PointsCountType.SIX]: { 0: 6, 60: 1, 120: 2, 180: 3, 240: 4, 300: 5 },
        [PointsCountType.FIVE]: { 0: 5, 72: 1, 144: 2, 216: 3, 288: 4 },
        [PointsCountType.FOUR]: { 0: 4, 90: 1, 180: 2, 270: 3 },
        [PointsCountType.TREE]: { 0: 3, 120: 1, 240: 2 },
        [PointsCountType.TWO]: { 0: 2, 180: 1 },
    };

    const adjustedCountMap: Record<number, number> = {};

    Object.entries(countMap[pointCount]).forEach(([key, value]) => {
        const parsedKey = parseFloat(key);

        if (!isNaN(parsedKey)) {
            adjustedCountMap[(parsedKey + extraRotation + 360) % 360] = value;
        }
    });

    return adjustedCountMap[adjustedAngle] !== undefined ? adjustedCountMap[adjustedAngle] : 100;
}

export function rotateArray(arr: any, positions: any, reverse = false) {
    const shift = positions % arr.length;
    const rotatedArray = reverse
        ? [...arr.slice(-shift), ...arr.slice(0, -shift)]
        : [...arr.slice(shift), ...arr.slice(0, shift)];
    return rotatedArray;
}

export function calculateMoves(array: Array<number>, a: number, b: number) {
    const n = array.length;

    const getIndex = (num: number) => {
        const index = array.indexOf(num);
        return index === -1 ? array.lastIndexOf(num) : index;
    };

    const indexA = getIndex(a);
    const indexB = getIndex(b);

    let clockwiseMoves = 0;
    let anticlockwiseMoves = 0;

    for (let i = indexB; i !== indexA; i = (i + 1) % n) {
        clockwiseMoves++;
    }

    for (let i = indexB; i !== indexA; i = (i - 1 + n) % n) {
        anticlockwiseMoves++;
    }

    return {
        movesCount: Math.min(clockwiseMoves, anticlockwiseMoves),
        direction: clockwiseMoves <= anticlockwiseMoves,
    };
}