import { Item } from '../Item';
import { GalleryOptions, ModelAttributes } from './AbstractGallery';
import { AbstractRowGallery } from './AbstractRowGallery';
export interface SquareGalleryOptions extends GalleryOptions {
    itemsPerRow: number;
}
export declare class Square<Model extends ModelAttributes = any> extends AbstractRowGallery {
    protected elementRef: HTMLElement;
    protected photoswipeElementRef?: HTMLElement;
    protected scrollElementRef?: HTMLElement;
    /**
     * Options after having been defaulted
     */
    protected options: SquareGalleryOptions;
    constructor(elementRef: HTMLElement, options: SquareGalleryOptions, photoswipeElementRef?: HTMLElement, scrollElementRef?: HTMLElement);
    /**
     * Compute sides with 1:1 ratio
     */
    static organizeItems(gallery: Square, items: Item[], firstRowIndex?: number, toRow?: number): void;
    protected getEstimatedColumnsPerRow(): number;
    protected getEstimatedRowsPerPage(): number;
    /**
     * Return square side size
     */
    protected getItemSideSize(): number;
    organizeItems(items: Item[], fromRow?: number, toRow?: number): void;
}
