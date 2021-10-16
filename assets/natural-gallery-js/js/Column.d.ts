import { Item } from './Item';
export declare interface ColumnOptions {
    width: number;
    gap: number;
}
export declare class Column {
    private options;
    private collection;
    private _elementRef;
    constructor(options: ColumnOptions);
    init(): HTMLElement;
    addItem(item: Item): void;
    readonly height: number;
    readonly length: number;
    readonly elementRef: HTMLElement;
}
