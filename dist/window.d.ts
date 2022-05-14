import { EventListener, EventName } from './events';
declare type WindowEventName = EventName<WindowEventMap>;
declare type WindowEventListener<E extends WindowEventName> = EventListener<WindowEventMap, E>;
export declare const on: <E extends string>(event: E, listener: WindowEventListener<E>) => void;
export declare const off: <E extends string>(event: E, listener: WindowEventListener<E>) => void;
export declare const once: <E extends string>(event: E, listener: WindowEventListener<E>) => void;
export declare const trigger: (event: string) => void;
export {};
