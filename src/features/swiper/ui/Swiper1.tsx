import React, { useEffect, useRef } from 'react';
// @ts-ignore
import gsap from '../../../../modules/gsap-trial';
// @ts-ignore
import Draggable from '../../../../modules/gsap-trial/dist/Draggable';
// @ts-ignore
import InertiaPlugin from '../../../../modules/gsap-trial/dist/InertiaPlugin';
import cls from './Swiper.module.scss';

// https://codepen.io/barklim/pen/oNJbwXK?editors=1111
export const Swiper = () => {
    gsap.registerPlugin(Draggable);
    gsap.registerPlugin( InertiaPlugin);
    const pickerRef = useRef<HTMLDivElement>(null);
    const proxyRef = useRef<HTMLDivElement>(document.createElement('div'));
    const baseTl = useRef<gsap.core.Timeline | null>(null);
    const cellWidth = window.innerWidth * 0.5;
    const rotation = -90;

    // const numCells = cellsRef.current?.length || 0;
    const numCells = 5;
    const cellStep = 1 / numCells;
    const wrapWidth = cellWidth * numCells;

    useEffect(() => {
        baseTl.current = gsap.timeline({ paused: true });

        gsap.defaults({
            ease: 'none',
        });

        const picker = pickerRef.current;

        if (picker) {
            const cells = Array.from({ length: 5 }).map((_, index) => {
                const cell = document.createElement('div');
                cell.className = cls.cell;
                cell.innerHTML = `<div class="${cls.cellContent}">Card ${index + 1}</div>`;
                picker.appendChild(cell);
                return cell;
            });

            const numCells = cells.length;
            const wrapWidth = cellWidth * numCells;

            gsap.set(picker, {
                perspective: 1100,
                width: wrapWidth - cellWidth,
            });

            cells.forEach((cell, index) => {
                initCell(cell, index);
            });

            const snapX = (x: number) => {
                return Math.round(x / cellWidth) * cellWidth;
            };

            const updateProgress = (dragObject: gsap.plugins.Draggable) => {
                const newProg = dragObject.x / wrapWidth;
                const normalizedProg = newProg - Math.floor(newProg);
                animation.progress(normalizedProg);
            };

            const animation = gsap.timeline({ repeat: -1, paused: true }).add(
                baseTl.current.tweenFromTo(0.929, 1.929).duration(20).seek(1.5)
            ).progress(1);

            const draggable = new Draggable(proxyRef.current, {
                allowContextMenu: true,
                type: 'x',
                trigger: picker,
                inertia: true,
                onDrag: (e: any) => updateProgress(e),
                onThrowUpdate: (e: any) => updateProgress(e),
                snap: {
                    x: snapX,
                },
                onThrowComplete: () => {},
            });
        }
    }, []);

    const initCell = (element: HTMLDivElement, index: number) => {
        gsap.set(element, {
            width: cellWidth,
            scale: 0.7,
            rotation: rotation,
            x: -cellWidth,
        });

        const tl = gsap.timeline({ repeat: 1 }).to(
            element,
            1,
            { x: `+=${wrapWidth}`, rotation: -rotation },
            0
        ).to(
            element,
            cellStep,
            { scale: 1, repeat: 1, yoyo: true },
            0.5 - cellStep
        );

        baseTl.current?.add(tl, index * -cellStep);
    };

    const handlePrevButtonClick = () => {
        baseTl.current?.pause();
        baseTl.current?.reverse();
    };

    const handleNextButtonClick = () => {
        baseTl.current?.pause();
        baseTl.current?.play();
    };

    const renderCells = () => {
        return (
            <>
                <div ref={pickerRef} className={cls.picker}></div>

                <button className={cls.prevButton} onClick={handlePrevButtonClick}>
                    PREV BUTTON
                </button>
                <button className={cls.nextButton} onClick={handleNextButtonClick}>
                    NEXT BUTTON
                </button>
            </>
        );
    };

    return <main className={cls.main}>{renderCells()}</main>;
};
