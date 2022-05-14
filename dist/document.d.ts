import { EventListener, EventName } from './events';
declare type DocumentEventName = EventName<DocumentEventMap>;
declare type DocumentEventListener<E extends DocumentEventName> = EventListener<DocumentEventMap, E>;
export declare const on: <E extends string>(event: E, listener: DocumentEventListener<E>) => void;
export declare const off: <E extends string>(event: E, listener: DocumentEventListener<E>) => void;
export declare const once: <E extends string>(event: E, listener: DocumentEventListener<E>) => void;
export declare const trigger: (event: string) => void;
export {};
