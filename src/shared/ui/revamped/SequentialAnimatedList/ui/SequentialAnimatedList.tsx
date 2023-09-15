import React, { useEffect, useState } from 'react';
import cls from './SequentialAnimatedList.module.scss';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { classNames } from '@/shared/lib/classNames/classNames';

const img1 = 'https://github.com/Barklim/course/blob/main/hostImg/swipe2.jpeg?raw=true';
const img2 = 'https://github.com/Barklim/course/blob/main/hostImg/3.jpeg?raw=true';
const img3 = 'https://github.com/Barklim/course/blob/main/hostImg/1.jpeg?raw=true';
const img4 = 'https://github.com/Barklim/course/blob/main/hostImg/swipe3.jpeg?raw=true';
const img5 = 'https://github.com/Barklim/course/blob/main/hostImg/6.jpeg?raw=true';

const images = [img1, img2, img3, img5, img4, img3 ,img5];

interface SequentialAnimatedListProps {}

function getRandomInterval() {
    return Math.floor(Math.random() * 10 + 1) * 1000;
}

function shiftArrayIndices(arr: number[]): number[] {
    const newArr = [...arr];
    const lastItem = newArr.pop();
    newArr.unshift(lastItem as number);
    return newArr;
}

function unShiftArrayIndices(arr: number[]): number[] {
    const newArr = [...arr];
    const firstItem = newArr.shift();
    newArr.push(firstItem as number);
    return newArr;
}

function getImages(arrIndexes: number[], images: string[]): string[] {
    const imgArr: Array<string> = [];
    imgArr.push(images[arrIndexes[0]]);
    imgArr.push(images[arrIndexes[1]]);
    imgArr.push(images[arrIndexes[2]]);
    return imgArr;
}

export const SequentialAnimatedList: React.FC<SequentialAnimatedListProps> = ({
// TODO: Props items AppImages, count of shows elements, speed changes, e.t.c.
// TODO: direction animation and orientation
// items,
// loading,
// play,
}) => {
    const [arrayIndex, setArrayIndex] = useState<number[]>([0, 1, 2]);
    const [animate, setAnimate] = useState(false);

    const shift = () => {
        setAnimate(true);
        setTimeout(() => {
            setArrayIndex((prevArrayIndex) => shiftArrayIndices(prevArrayIndex));
            setAnimate(false);
        }, 1000);
    }

    useEffect(() => {
        let initArr: Array<number> = [];
        images.forEach((item, index) => {
            initArr.push(index)
        })
        setArrayIndex(initArr);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            shift();
        }, getRandomInterval());

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const renderList = getImages(arrayIndex, images)?.map((img, index) => {
        const transformStyle = animate
            ? { transition: 'transform 1s ease', transform: `translateX(${18}px)` }
            : { transition: 'transform 0s ease', transform: 'translateX(0)' };

        return (
            <div
                key={index}
                style={transformStyle}
                className={classNames(cls.wrapper, {}, [
                    index === 2 && animate ? cls.hidden : ''
                ] )}
            >
                <AppImage
                    fallback={<Skeleton border="50%" width={30} height={30} className={cls.imgGap} />}
                    src={img}
                    width={30}
                    height={30}
                    className={classNames(cls.communityImg, {}, [
                        index === 0 ? cls.imgGap : cls.imgGap,
                    ] )}
                />
            </div>
        );
    });

    return <>
        {animate ?
            <div
                className={classNames(cls.wrapper, {}, [cls.shown])}
            >
                <AppImage
                    fallback={<Skeleton border="50%" width={30} height={30} className={cls.imgGapFirstItem} />}
                    src={getImages(shiftArrayIndices(arrayIndex), images)[0]}
                    width={30}
                    height={30}
                    className={classNames(cls.communityImg, {}, [
                         cls.imgGapFirstItem
                    ] )}
                />
            </div> : null
        }
        {renderList}
    </>;
};
