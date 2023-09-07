
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

    getName (): string {
        return this.name
    }

    getAuthor () : string {
        return this.author
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

export class BookToBoroow {
    constructor (
        private id: number,
        private name: string,
        private author: string,
        private borrowed: boolean
    ) {}

    getId (): number {
        return this.id
    }

    getName (): string {
        return this.name
    }

    getAuthor () : string {
        return this.author
    }

    getBorrowed () : boolean {
        return this.borrowed
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
