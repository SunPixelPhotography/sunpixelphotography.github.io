import { AbstractGallery } from './AbstractGallery';
export declare abstract class AbstractRowGallery extends AbstractGallery {
    protected onScroll(): void;
    protected onPageAdd(): void;
    /**
     * Add given number of rows to DOM
     * @param rows
     */
    protected addRows(rows: number): void;
    protected endResize(): void;
}
