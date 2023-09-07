
import { Book, BookToBoroow } from "./Book"

export class Library {
    // Lista de libros en posesión de la biblioteca
    private booksInPossession: Book[] = []

    // Lista de libros disponibles
    private borrowedBooks: BookToBoroow[] = []

    // Lista de libros prestados
    private availableBooks: Book[] = []

    constructor (private name: string) {}

    generarIdBooksInPossession (): number {
        const arrayIds = this.booksInPossession.map(book => book.getId())
        if (!arrayIds.length) {
            arrayIds.push(0)
        }
        return Math.max(...arrayIds) + 1
    }

    generarIdBorrowedBooks (): number {
        const arrayIds = this.borrowedBooks.map(book => book.getId())
        if (!arrayIds.length) {
            arrayIds.push(0)
        }
        return Math.max(...arrayIds) + 1
    }

    generarIdAvailableBooks (): number {
        const arrayIds = this.availableBooks.map(book => book.getId())
        if (!arrayIds.length) {
            arrayIds.push(0)
        }
        return Math.max(...arrayIds) + 1
    }

    // Método para agregar un libro a la lista de libros que posee la biblioteca
    addBook (book: Book): void {
        this.booksInPossession.push(book)
        console.log('Libro agregado corrrectamente! ')
    };

    // Método para agregar un libro a la lista de libros disponibles para prestar
    publishBook (book: Book): void {
        this.availableBooks.push(book)
        console.log('Libro agregado a la lista de 🌟disponibles🌟 correctamente')
    }

    getBooksInPossession (): Book[] {
        return this.booksInPossession
    }

    getBorrowedBooks (): BookToBoroow[] {
        return this.borrowedBooks
    }

    getAvailableBooks (): Book[] {
        return this.availableBooks
    }

    /* publishBook (book: Book) {
        this.availableBooks.push(book)
    } */

    borrowBook (bookToBorrow: Book) {
        // Me fijo si el libro está disponible
        console.log('El libro del borrowBook(): ', bookToBorrow)

        const [...availableBook]: Book[] = this.availableBooks.filter(book => {
            return book.getName() === bookToBorrow.getName() && book.getAuthor() === bookToBorrow.getAuthor()
        })

        console.log('El libro disponible del borrowBook: ', availableBook[0])
        if (availableBook.length > 1 && availableBook[0].getQuantity() > 0) {
            bookToBorrow.decreaseQuantity()
            // Instanciar la clase BookToBorrow y crear un nuevo objeto libro para prestar y luego añadirlo a la lista boorrowedBooks.

            // this.borrowedBooks.push(bookToBorrow)
        }
    }
}

const myLibrary = new Library('Babel')

const book1: Book = new Book(
    myLibrary.generarIdBooksInPossession(),
    'J. J. H.',
    'Just another book',
    10
)

const book2: Book = new Book(
    myLibrary.generarIdBooksInPossession(),
    'Thex Author',
    'Name book 2',
    5
)

myLibrary.addBook(book1)
myLibrary.addBook(book2)
console.log('Libros que posee la biblioteca: ', myLibrary.getBooksInPossession())

myLibrary.publishBook(book1)
myLibrary.publishBook(book2)
console.log('Libros que se pueden prestar: ', myLibrary.getAvailableBooks())

myLibrary.borrowBook(book1)
