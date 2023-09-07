
import { Book } from "./Book"

export class Library {
    // Lista de libros disponibles
    private borrowedBooks: Book[] = []

    // Lista de libros prestados
    private availableBooks: Book[] = []

    // Lista de todos los libros que posee la biblioteca
    private books: Book[] = []

    constructor (private name: string) {}

    generarId (): number {
        const arrayIds = this.books.map(book => book.id)
        if (!arrayIds.length) {
            arrayIds.push(0)
        }
        return Math.max(...arrayIds) + 1
    }

    addBook (book: Book) {
        this.books.push(book)
        console.log('Libro agregado corrrectamente! ')
    };

    getBooks () {
        return this.books
    }

    publishBook (book: Book) {
        this.availableBooks.push(book)
    }

    borrowBook (bookToBoroow: Book) {
        const availableBook: Book[] = this.availableBooks.filter(book => book.name === bookToBoroow.name)

        if (availableBook.length > 1 && availableBook[0].quantity > 0) {
            bookToBoroow.quantity =
            this.borrowedBooks.push(bookToBoroow)
        }
    }
}

const myLibrary = new Library('Babel')

const book1: Book = {
    id: myLibrary.generarId(),
    author: 'J. J. H.',
    name: 'Just another book',
    borrowed: false,
    quantity: 10
}

myLibrary.addBook(book1)
console.log('Hola 2')

console.log('Lista de libros: ', myLibrary.getBooks())

// myLibrary.borrowBook(book1)
console.log('Hola')
