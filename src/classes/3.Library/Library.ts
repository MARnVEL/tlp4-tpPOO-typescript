
import { Book, BookToBoroow } from "./Book"

export class Library {
    // Lista de libros en posesión de la biblioteca:
    private booksInPossession: Book[] = []

    // Lista de libros prestados:
    private borrowedBooks: BookToBoroow[] = []

    // Lista de libros disponibles:
    private availableBooks: Book[] = []

    constructor (private name: string) {}

    generateIdBooksInPossession (): number {
        const arrayIds = this.booksInPossession.map(book => book.getId())
        if (!arrayIds.length) {
            arrayIds.push(0)
        }
        return Math.max(...arrayIds) + 1
    }

    generateIdBorrowedBooks (): number {
        const arrayIds = this.borrowedBooks.map(book => book.getId())
        if (!arrayIds.length) {
            arrayIds.push(0)
        }
        return Math.max(...arrayIds) + 1
    }

    /* Esto no es necesario porque los libros disponibles tienen lo misma clase que los libros en posesión de la biblioteca, y por lo tanto, tendrán el mismo id
    generateIdAvailableBooks (): number {
        const arrayIds = this.availableBooks.map(book => book.getId())
        if (!arrayIds.length) {
            arrayIds.push(0)
        }
        return Math.max(...arrayIds) + 1
    }
    */

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

    borrowBook (bookToBorrow: Book): BookToBoroow {
        // console.log('El libro del borrowBook(): ', bookToBorrow)

        // Me fijo si el libro está disponible
        const [...availableBook]: Book[] = this.availableBooks.filter(book => {
            return book.getName() === bookToBorrow.getName() && book.getAuthor() === bookToBorrow.getAuthor()
        })

        // console.log('El libro disponible del borrowBook: ', availableBook[0])
        // console.log('availableBook.length: ', availableBook.length)
        // console.log('availableBook[0].getQuantity(): ', availableBook[0].getQuantity())

        if (availableBook.length > 0 && availableBook[0].getQuantity() > 0) {
            // console.log('Entró al if')

            bookToBorrow.decreaseQuantity()
            // Instanciar la clase BookToBorrow y crear un nuevo objeto libro para prestar y luego añadirlo a la lista boorrowedBooks.
            const id: number = myLibrary.generateIdBorrowedBooks() // !No sé si esto está bien
            const name: string = bookToBorrow.getName()
            const author: string = bookToBorrow.getAuthor()
            const newBookToBorrow = new BookToBoroow(id, name, author, true)
            console.log('El nuevo libro para prestar: ', newBookToBorrow)

            // Añadimos el libro a la lista de libros prestados.
            this.borrowedBooks.push(newBookToBorrow)
            console.log(`Acaba de prestar el libro: ${newBookToBorrow.getName()}`)
            return newBookToBorrow
        } else if (availableBook.length === 0) {
            console.log(`El libro ${bookToBorrow} no está disponible para ser prestado`)

            // TODO: Lógica para consultar si el libro existe en el catálogo. Es decir, que el libro no está disponible para prestar, pero la biblioteca sí posee ejemplares para consultar presencialmente o aún no han sido puestos en la lista de libros disponibles para prestar.
            const id: number = myLibrary.generateIdBorrowedBooks() // TODO: No sé si esto está bien
            const name: string = bookToBorrow.getName()
            const author: string = bookToBorrow.getAuthor()
            const newBookToBorrow = new BookToBoroow(id, name, author, false)
            return newBookToBorrow
        } else if (availableBook[0].getQuantity() === 0) {
            console.log(`Actualmente,los ejemplares del libro ${bookToBorrow} se encuentran agotados para prestar. Intente más tarde, o en unos días.`)
            const id: number = myLibrary.generateIdBorrowedBooks() // !No sé si esto está bien
            const name: string = bookToBorrow.getName()
            const author: string = bookToBorrow.getAuthor()
            const newBookToBorrow = new BookToBoroow(id, name, author, false)
            return newBookToBorrow
        }

        console.log(`Actualmente, la biblioteca no posee el libro ${bookToBorrow}, y no se encuentra ni para prestar ni en el catálogo general.`)
        const id: number = myLibrary.generateIdBorrowedBooks() // !No sé si esto está bien
        const name: string = bookToBorrow.getName()
        const author: string = bookToBorrow.getAuthor()
        const newBookToBorrow = new BookToBoroow(id, name, author, false)
        return newBookToBorrow
    }

    returnBook (bookToReturn: BookToBoroow): BookToBoroow {
        const boorrowedBookInList = this.borrowedBooks.filter(book => {
            return book.getId() === bookToReturn.getId()
        })
        console.log('Log del returnBook(). boorrowedBookList: ', boorrowedBookInList)
        return boorrowedBookInList[0]
    }
}

// ! *****************************  PRUEBAS  **********************************
// Instanciamos la biblioteca:
const myLibrary = new Library('Babel')

// Instanciamos un nuevo libro adquirido por la bibliioteca:
const book1: Book = new Book(
    myLibrary.generateIdBooksInPossession(),
    'J. J. H.',
    'Just another book',
    10
)
// !Para que me funcione el "generateIdBooksInPossession", sí o sí debo agregar el libro después de crearlo
myLibrary.addBook(book1)

// Instanciamos otro libro adquirido por la biblioteca:
const book2: Book = new Book(
    myLibrary.generateIdBooksInPossession(),
    'Thex Author',
    'Name book 2',
    5
)
// !Para que me funcione el "generateIdBooksInPossession", sí o sí debo agregar el libro después de crearlo
myLibrary.addBook(book2)
console.log('Libros que posee la biblioteca: ', myLibrary.getBooksInPossession())

// Ahora hacemos que la biblioteca publique sus libros y los ponga a disposición del público:
myLibrary.publishBook(book1)
myLibrary.publishBook(book2)
console.log('Libros que se pueden prestar: ', myLibrary.getAvailableBooks())

// Prestamos un libro:
const borrowedBook1 = myLibrary.borrowBook(book1)
console.log('Primer libro prestado: ', borrowedBook1)

// Prestamos otro ejemplar del mismo libro:
const borrowedBook2 = myLibrary.borrowBook(book1)
console.log('Segundo libro prestado: ', borrowedBook2)
// Vemos cómo queda la lista de libros prestados:
console.log('Listado de libros prestados: ', myLibrary.getBorrowedBooks())
// Vemos cómo queda la lista de libros disponibles:
console.log('Listado de libros disponibles: ', myLibrary.getAvailableBooks())

// Devolvemos un libro:
const returnedBook = myLibrary.returnBook(borrowedBook1)
console.log('Libro devuelto: ', returnedBook)
