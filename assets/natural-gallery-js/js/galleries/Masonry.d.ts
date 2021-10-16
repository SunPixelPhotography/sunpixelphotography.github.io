import { Column } from '../Column';
import { Item } from '../Item';
import { RatioLimits } from '../Utility';
import { AbstractGallery, GalleryOptions, ModelAttributes } from './AbstractGallery';
export interface MasonryGalleryOptions extends GalleryOptions {
    columnWidth: number;
    ratioLimit?: RatioLimits;
}
export declare class Masonry<Model extends ModelAttributes = any> extends AbstractGallery {
    protected elementRef: HTMLElement;
    protected photoswipeElementRef?: HTMLElement;
    protected scrollElementRef?: HTMLElement;
    /**
     * Options after having been defaulted
     */
    protected options: MasonryGalleryOptions;
    /**
     * Regroup the list of columns
     */
    protected columns: Column[];
    constructor(elementRef: HTMLElement, options: MasonryGalleryOptions, photoswipeElementRef?: HTMLElement, scrollElementRef?: HTMLElement);
    /**
     * Compute sides with 1:1 ratio
     */
    static organizeItems(gallery: Masonry, items: Item[], fromIndex?: number, toIndex?: number): void;
    init(): void;
    organizeItems(items: Item[], fromRow?: number, toRow?: number): void;
    protected initItems(): void;
    protected onScroll(): void;
    protected onPageAdd(): void;
    protected getEstimatedColumnsPerRow(): number;
    protected getEstimatedRowsPerPage(): number;
    /**
     * Use current gallery height as reference. To fill free space it add images until the gallery height changes, then are one more row
     */
    protected addUntilFill(): void;
    protected addItemToDOM(item: Item<Model>, destination?: HTMLElement): void;
    protected endResize(): void;
    protected addColumns(): void;
    protected empty(): void;
    /**
     * Returns true if at least one columns doesn't overflow on the bottom of the viewport
     */
    private viewPortIsNotFilled;
    private addItemsToDom;
    /**
     * Return square side size
     */
    private getColumnWidth;
    private getShortestColumn;
}
