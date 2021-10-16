import { Item } from '../Item';
import { ModelAttributes } from './AbstractGallery';
import { AbstractResponsiveRowGallery, ResponsiveGalleryOptions } from './AbstractResponsiveRowGallery';
/**
 * @deprecated
 */
export interface ResponsiveSquareGalleryOptions extends ResponsiveGalleryOptions {
}
/**
 * @deprecated use Natural with option.ratioLimit = {min: 1, max: 1}
 */
export declare class ResponsiveSquare<Model extends ModelAttributes = any> extends AbstractResponsiveRowGallery {
    protected elementRef: HTMLElement;
    protected photoswipeElementRef?: HTMLElement;
    protected scrollElementRef?: HTMLElement;
    /**
     * Options after having been defaulted
     */
    protected options: ResponsiveSquareGalleryOptions;
    constructor(elementRef: HTMLElement, options: ResponsiveSquareGalleryOptions, photoswipeElementRef?: HTMLElement, scrollElementRef?: HTMLElement);
    /**
     * Compute sides with 1:1 ratio
     */
    static organizeItems(gallery: ResponsiveSquare, items: Item[], fromRow?: number, toRow?: number): void;
    organizeItems(items: Item[], fromRow?: number, toRow?: number): void;
    protected getEstimatedColumnsPerRow(): number;
    protected getEstimatedRowsPerPage(): number;
    protected getItemSideSize(): number;
}
