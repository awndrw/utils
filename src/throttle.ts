import { Callback } from './types/Callback';

type ThrottledFunction<C extends Callback> = (
    ...args: Parameters<C>
) => ReturnType<C>;

export const throttle = <C extends Callback>(
    callback: C,
    limit: number
): ThrottledFunction<C> => {
    let waiting: boolean;
    let prev: ReturnType<C>;
    return (...args: Parameters<C>) => {
        if (!waiting) {
            waiting = true;
            setTimeout(() => (waiting = false), limit);
            prev = callback.apply(this, args) as ReturnType<C>;
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return prev;
    };
};
