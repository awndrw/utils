import { EventListener } from './events';
export declare const on: <E extends string>(element: HTMLElement, event: E, listener: EventListener<HTMLElementEventMap, E>) => void;
export declare const off: <E extends string>(element: HTMLElement, event: E, listener: EventListener<HTMLElementEventMap, E>) => void;
export declare const once: <E extends string>(element: HTMLElement, event: E, listener: EventListener<HTMLElementEventMap, E>) => void;
export declare const trigger: (element: HTMLElement, event: string) => void;
