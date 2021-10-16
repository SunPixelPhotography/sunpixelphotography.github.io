import { Item } from '../Item';
import { RatioLimits } from '../Utility';
import { GalleryOptions, ModelAttributes, SizedModel } from './AbstractGallery';
import { AbstractRowGallery } from './AbstractRowGallery';
export interface NaturalGalleryOptions extends GalleryOptions {
    rowHeight: number;
    ratioLimit?: RatioLimits;
}
export declare class Natural<Model extends ModelAttributes = any> extends AbstractRowGallery {
    protected elementRef: HTMLElement;
    protected photoswipeElementRef?: HTMLElement;
    protected scrollElementRef?: HTMLElement;
    /**
     * Options after having been defaulted
     */
    protected options: NaturalGalleryOptions;
    constructor(elementRef: HTMLElement, options: NaturalGalleryOptions, photoswipeElementRef?: HTMLElement, scrollElementRef?: HTMLElement);
    static organizeItems(gallery: Natural, items: Item[], fromRow?: number, toRow?: number, currentRow?: number): void;
    /**
     * Compute sizes for given images to fit in given row width
     * Items are updated
     */
    static computeSizes(chunk: Item[], containerWidth: number, margin: number, row: number, maxRowHeight: number, ratioLimits: RatioLimits): void;
    static getRowWidth(models: SizedModel[], maxRowHeight: number, margin: number, ratioLimits: RatioLimits): number;
    static getRowHeight(models: SizedModel[], containerWidth: number, margin: number, ratioLimits: RatioLimits): number;
    /**
     * Return the ratio format of models as if they where a single image
     */
    static getRatios(models: SizedModel[], ratioLimits: RatioLimits): number;
    addRows(rows: number): void;
    organizeItems(items: Item[], fromRow?: number, toRow?: number): void;
    protected endResize(): void;
    protected getEstimatedColumnsPerRow(): number;
    protected getEstimatedRowsPerPage(): number;
    private completeLastRow;
}
