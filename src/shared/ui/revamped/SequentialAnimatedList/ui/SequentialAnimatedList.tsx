import React, { useEffect, useState } from 'react';
import cls from './SequentialAnimatedList.module.scss';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { classNames } from '@/shared/lib/classNames/classNames';
import './SequentialAnimatedList.css';

const img1 = 'https://github.com/Barklim/course/blob/main/hostImg/swipe2.jpeg?raw=true';
const img2 = 'https://github.com/Barklim/course/blob/main/hostImg/3.jpeg?raw=true';
const img3 = 'https://github.com/Barklim/course/blob/main/hostImg/1.jpeg?raw=true';
const img4 = 'https://github.com/Barklim/course/blob/main/hostImg/swipe3.jpeg?raw=true';
const img5 = 'https://github.com/Barklim/course/blob/main/hostImg/6.jpeg?raw=true';

const images = [img1, img2, img3, img5, img4, img3 ,img5];

interface SequentialAnimatedListProps {}

function shiftArrayIndices(arr: any) {
    const newArr = [...arr];
    const lastItem = newArr.pop();
    newArr.unshift(lastItem);
    return newArr;
}

function getImages(arrIndexes: any, images: any) {
    const imgArr: Array<string> = [];
    imgArr.push(images[arrIndexes[0]]);
    imgArr.push(images[arrIndexes[1]]);
    imgArr.push(images[arrIndexes[2]]);
    return imgArr;
}

export const SequentialAnimatedList: React.FC<SequentialAnimatedListProps> = ({
    // TODO: Props items AppImages, count of shows elements, speed changes, e.t.c.
    // items,
    // loading,
    // play,
}) => {
    const [arrayIndex, setArrayIndex] = useState<number[]>([0, 1, 2])

    const shift = () => {
        setArrayIndex((prevArrayIndex) => shiftArrayIndices(prevArrayIndex));
    }

    useEffect(() => {
        let initArr: Array<number> = [];
        images.forEach((item, index) => {
            initArr.push(index)
        })
        setArrayIndex(initArr);
    }, []);

    useEffect(() => {
        // TODO: change classes
    }, [arrayIndex]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            shift();
        }, 4000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const renderList = getImages(arrayIndex, images)?.map((img, index) => {
        return (
            <AppImage
                key={index}
                fallback={<Skeleton border="50%" width={30} height={30} className={cls.imgGap} />}
                src={img}
                className={classNames(cls.communityImg, {}, [
                    index === 0 ? cls.imgGap : cls.imgGap,
                    index === 0 ? cls.firstIem : ''
                ] )}
                width={30}
                height={30}
            />
        );
    });

    return <>{renderList}</>;
};
