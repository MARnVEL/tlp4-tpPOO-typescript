
export class Book {
    constructor (
        private id: number,
        private name: string,
        private author: string,
        private quantity: number
    ) {}

    getId (): number {
        return this.id
    }

    getQuantity (): number {
        return this.quantity
    }

    decreaseQuantity (): number {
        return this.quantity--
    }

    increaseQuantity (): number {
        return this.quantity++
    }
}
export class BookToBoroow extends Book {
    private borrowed: boolean
    constructor (
        id: number,
        name: string,
        author: string,
        quantity: number,
        borrowed: boolean
    ) {
        super(id, name, author, quantity)
        this.borrowed = borrowed
    }
}
/*
export interface Book {
    id: number;
    name: string;
    author: string;
    quantity: number;
    borrowed: boolean
}
*/
