import { EventListener, EventName, DomEventListener } from './events';

type WindowEventName = EventName<WindowEventMap>;
type WindowEventListener<E extends WindowEventName> = EventListener<
    WindowEventMap,
    E
>;

export const on = <E extends WindowEventName>(
    event: E,
    listener: WindowEventListener<E>
) => {
    window.addEventListener(event, listener as DomEventListener);
};

export const off = <E extends WindowEventName>(
    event: E,
    listener: WindowEventListener<E>
) => {
    window.removeEventListener(event, listener as DomEventListener);
};

export const once = <E extends WindowEventName>(
    event: E,
    listener: WindowEventListener<E>
) => {
    const wrappedListener: WindowEventListener<E> = e => {
        listener(e);
        off(event, wrappedListener);
    };
    on(event, wrappedListener);
};

export const trigger = (event: string) => {
    const customEvent = new CustomEvent(event);
    window.dispatchEvent(customEvent);
};
