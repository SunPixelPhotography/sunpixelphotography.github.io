import { GalleryOptions } from './AbstractGallery';
import { AbstractRowGallery } from './AbstractRowGallery';
export interface ResponsiveGalleryOptions extends GalleryOptions {
    rowHeight: number;
}
export declare abstract class AbstractResponsiveRowGallery extends AbstractRowGallery {
    protected elementRef: HTMLElement;
    protected photoswipeElementRef?: HTMLElement;
    protected scrollElementRef?: HTMLElement;
    constructor(elementRef: HTMLElement, options: ResponsiveGalleryOptions, photoswipeElementRef?: HTMLElement, scrollElementRef?: HTMLElement);
    addRows(rows: number): void;
    protected endResize(): void;
    private completeLastRow;
}
