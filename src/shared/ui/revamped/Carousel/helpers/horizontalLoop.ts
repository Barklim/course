// @ts-ignore
import gsap from '../../../../../../modules/gsap-trial';
// @ts-ignore
import InertiaPlugin from '../../../../../../modules/gsap-trial/dist/InertiaPlugin';
// @ts-ignore
import Draggable from '../../../../../../modules/gsap-trial/dist/Draggable';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(Draggable, InertiaPlugin);
}

type LoopConfig = {
    repeat?: number;
    paused?: boolean;
    speed?: number;
    snap?: number;
    paddingRight?: number | string;
    reversed?: boolean;
};

/*
This helper function makes a group of elements animate along the x-axis in a seamless, responsive loop.
https://stackblitz.com/edit/stackblitz-starters-9etsod?file=pages%2Findex.js,styles%2Fglobals.css
https://codepen.io/GreenSock/details/gOvvJee

Features:
 - Uses xPercent so that even if the widths change (like if the window gets resized), it should still work in most cases.
 - When each item animates to the left or right enough, it will loop back to the other side
 - Optionally pass in a config object with values like "speed" (default: 1, which travels at roughly 100 pixels per second), paused (boolean),  repeat, reversed, and paddingRight.
 - The returned timeline will have the following methods added to it:
   - next() - animates to the next element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - previous() - animates to the previous element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - toIndex() - pass in a zero-based index value of the element that it should animate to, and optionally pass in a vars object to control duration, easing, etc. Always goes in the shortest direction
   - current() - returns the current index (if an animation is in-progress, it reflects the final index)
   - times - an Array of the times on the timeline where each element hits the "starting" spot. There's also a label added accordingly, so "label1" is when the 2nd element reaches the start.
 */
function horizontalLoop(items: HTMLElement[], config?: LoopConfig) {
    items = gsap.utils.toArray(items);
    config = config || {};

    let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: 'none' },
        onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    });

    let length = items.length;
    let startX = items[0].offsetLeft;
    let times: number[] = [];
    let widths: number[] = [];
    let xPercents: number[] = [];
    let curIndex = 0;
    let pixelsPerSecond = (config.speed || 1) * 100;
    let snap = typeof config.snap === 'boolean' && !config.snap ? (v: number) => v : gsap.utils.snap(config.snap || 1);
    let totalWidth: number;
    let curX: number;
    let distanceToStart: number;
    let distanceToLoop: number;
    let item: HTMLElement;
    let i: number;

    gsap.set(items, {
        xPercent: (i: number, el: HTMLElement) => {
            let w = (widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px')));
            xPercents[i] = snap(
                (parseFloat(gsap.getProperty(el, 'x', 'px')) / w) * 100 +
                gsap.getProperty(el, 'xPercent')
            );
            return xPercents[i];
        },
    });

    gsap.set(items, { x: 0 });

    totalWidth =
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth *
        gsap.getProperty(items[length - 1], 'scaleX') +
        (parseFloat(config.paddingRight as string) || 0);

    for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop =
            distanceToStart + widths[i] * gsap.getProperty(item, 'scaleX');

        tl.to(
            item,
            {
                xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
                duration: distanceToLoop / pixelsPerSecond,
            },
            0
        )
            .fromTo(
                item,
                {
                    xPercent: snap(
                        ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
                    ),
                },
                {
                    xPercent: xPercents[i],
                    duration:
                        (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
                    immediateRender: false,
                },
                distanceToLoop / pixelsPerSecond
            )
            .add('label' + i, distanceToStart / pixelsPerSecond);

        times[i] = distanceToStart / pixelsPerSecond;
    }

    function toIndex(index: number, vars?: gsap.TweenVars) {
        vars = vars || {};
        Math.abs(index - curIndex) > length / 2 &&
        (index += index > curIndex ? -length : length);

        let newIndex = gsap.utils.wrap(0, length, index);
        let time = times[newIndex];

        if (time > tl.time() !== index > curIndex) {
            vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
            time += tl.duration() * (index > curIndex ? 1 : -1);
        }

        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
    }

    tl.next = (vars?: gsap.TweenVars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars?: gsap.TweenVars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index: number, vars?: gsap.TweenVars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true);

    if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
    }

    return tl;
}

export default horizontalLoop;