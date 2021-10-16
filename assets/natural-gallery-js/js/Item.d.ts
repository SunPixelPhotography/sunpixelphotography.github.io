import { ModelAttributes } from './galleries/AbstractGallery';
export declare interface ItemOptions {
    lightbox?: boolean;
    selectable?: boolean;
    activable?: boolean;
    gap?: number;
    showLabels?: 'hover' | 'never' | 'always';
}
export interface ItemTitle {
    title: string;
    link: string;
    linkTarget: '_blank' | '_self' | '_parent' | '_top';
}
export declare class Item<Model extends ModelAttributes = any> {
    private readonly options;
    readonly model: Model;
    /**
     * Cleaned title, used for label / button
     */
    private readonly title;
    /**
     * Actual row index in the list
     */
    private _row;
    /**
     * If is actually the last element of a row
     */
    private _last;
    /**
     * Computed size (real used size)
     */
    private _width;
    private _height;
    /**
     * Wherever item is selected or not
     * @type {boolean}
     * @private
     */
    private _selected;
    /**
     * Item root element reference (figure)
     */
    private _element;
    /**
     * Image container reference (child div, containing the image)
     */
    private _image;
    /**
     * Reference to the select button
     */
    private _selectBtn;
    /**
     *
     * @param {ItemOptions} options
     * @param model Contains the source data given for an item (e.g object instance from database with id etc..)
     */
    constructor(options: ItemOptions, model: Model);
    /**
     * Cleans html, and returns only the texte from all eventual tags
     * @param {string} term
     * @returns {ItemTitle}
     */
    private getTitleDetails;
    /**
     * Create DOM elements according to element raw data (thumbnail and enlarged urls)
     * Also apply border-radius at this level because it never changed threw time
     */
    init(): HTMLElement;
    /**
     * Use computed (organized) data to apply style (size and margin) to elements on DOM
     * Does not apply border-radius because is used to restyle data on browser resize, and border-radius don't change.
     */
    style(): void;
    /**
     * This function prepare loaded/loading status and return root element.
     * @returns {HTMLElement}
     */
    loadImage(): void;
    toggleSelect(): void;
    select(): void;
    unselect(): void;
    private getLinkElement;
    remove(): void;
    last: boolean;
    row: number;
    height: number;
    width: number;
    readonly enlargedWidth: number;
    readonly enlargedHeight: number;
    readonly selected: boolean;
    readonly element: HTMLElement;
}
