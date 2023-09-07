
import { Book, BookToBoroow } from "./Book"

export class Library {
    // Lista de libros en posesión de la biblioteca
    private booksInPossession: Book[] = []

    // Lista de libros disponibles
    private borrowedBooks: Book[] = []

    // Lista de libros prestados
    private availableBooks: BookToBoroow[] = []

    // Lista de todos los libros que posee la biblioteca
    private books: Book[] = []

    constructor (private name: string) {}

    generarId (): number {
        const arrayIds = this.books.map(book => book.getId())
        if (!arrayIds.length) {
            arrayIds.push(0)
        }
        return Math.max(...arrayIds) + 1
    }

    addBook (book: Book) {
        this.books.push(book)
        console.log('Libro agregado corrrectamente! ')
    };

    /* publishBook (book: Book) {
        this.availableBooks.push(book)
    } */
    /*
    borrowBook (bookToBoroow: Book) {
        const availableBook: Book[] = this.availableBooks.filter(book => book.name === bookToBoroow.name)

        if (availableBook.length > 1 && availableBook[0].quantity > 0) {
            bookToBoroow.quantity =
            this.borrowedBooks.push(bookToBoroow)
        }
    } */
}

const myLibrary = new Library('Babel')

const book1: Book = new Book(
    myLibrary.generarId(),
    'J. J. H.',
    'Just another book',
    10
)

myLibrary.addBook(book1)
// myLibrary.borrowBook(book1)
console.log('Hola')
