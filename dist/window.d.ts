import { EventListener } from './events';
export declare const on: <E extends string>(event: E, listener: EventListener<WindowEventMap, E>) => void;
export declare const off: <E extends string>(event: E, listener: EventListener<WindowEventMap, E>) => void;
export declare const once: <E extends string>(event: E, listener: EventListener<WindowEventMap, E>) => void;
export declare const trigger: (event: string) => void;
