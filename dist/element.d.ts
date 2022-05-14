import { EventListener, EventName } from './events';
declare type ElementEventName = EventName<HTMLElementEventMap>;
declare type ElementEventListener<E extends ElementEventName> = EventListener<HTMLElementEventMap, E>;
export declare const on: <E extends string>(element: HTMLElement, event: E, listener: ElementEventListener<E>) => void;
export declare const off: <E extends string>(element: HTMLElement, event: E, listener: ElementEventListener<E>) => void;
export declare const once: <E extends string>(element: HTMLElement, event: E, listener: ElementEventListener<E>) => void;
export declare const trigger: (element: HTMLElement, event: string) => void;
export {};
