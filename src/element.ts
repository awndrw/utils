import { EventListener, EventName, DomEventListener } from './events';

type ElementEventName = EventName<HTMLElementEventMap>;
type ElementEventListener<E extends ElementEventName> = EventListener<
    HTMLElementEventMap,
    E
>;

export const on = <E extends ElementEventName>(
    element: HTMLElement,
    event: E,
    listener: ElementEventListener<E>
) => {
    element.addEventListener(event, listener as DomEventListener);
};

export const off = <E extends ElementEventName>(
    element: HTMLElement,
    event: E,
    listener: ElementEventListener<E>
) => {
    element.removeEventListener(event, listener as DomEventListener);
};

export const once = <E extends ElementEventName>(
    element: HTMLElement,
    event: E,
    listener: ElementEventListener<E>
) => {
    const wrappedListener: ElementEventListener<E> = e => {
        listener(e);
        off(element, event, wrappedListener);
    };
    on(element, event, wrappedListener);
};

export const trigger = (element: HTMLElement, event: string) => {
    const customEvent = new CustomEvent(event);
    element.dispatchEvent(customEvent);
};
