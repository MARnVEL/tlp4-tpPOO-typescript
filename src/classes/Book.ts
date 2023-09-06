
/* export class Book {
    constructor (
        private id: number,
        private name: string,
        private author: string,
        private quantity: string,
        private borrowed: boolean
    ) {}
} */

export interface Book {
    id: number;
    name: string;
    author: string;
    quantity: number;
    borrowed: boolean
}
