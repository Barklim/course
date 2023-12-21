import { useEffect, useRef, DependencyList } from 'react';

interface Config {
    timeout: number;
    ignoreInitialCall: boolean;
}

const DEFAULT_CONFIG: Config = {
    timeout: 0,
    ignoreInitialCall: true,
};

type CallbackFunction = () => (() => void) | undefined;

export function useDebouncedEffect(
    callback: CallbackFunction,
    config: number | Config,
    deps: DependencyList = []
) {
    let currentConfig: Config;

    if (typeof config === 'number') {
        currentConfig = {
            ...DEFAULT_CONFIG,
            timeout: config,
        };
    } else {
        currentConfig = {
            ...DEFAULT_CONFIG,
            ...config,
        };
    }

    const { timeout, ignoreInitialCall } = currentConfig;
    const data = useRef<{ firstTime: boolean; clearFunc?: () => void }>({ firstTime: true });

    useEffect(() => {
        const { firstTime, clearFunc } = data.current;

        if (firstTime && ignoreInitialCall) {
            data.current.firstTime = false;
            return;
        }

        const handler = setTimeout(() => {
            if (clearFunc && typeof clearFunc === 'function') {
                clearFunc();
            }
            data.current.clearFunc = callback();
        }, timeout);

        return () => {
            clearTimeout(handler);
            if (data.current.clearFunc) {
                data.current.clearFunc();
            }
        };
    }, [timeout, ...deps]);
}

export default useDebouncedEffect;
