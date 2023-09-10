import { IContact } from "./Contact"

export class ContactList {
    private contacts: IContact[] = []

    generarId (): number {
        const arrayIds = this.contacts.map(contact => contact.id)
        if (!arrayIds.length) {
            arrayIds.push(0)
        }
        return Math.max(...arrayIds) + 1
    }

    addContact (contact: IContact) {
        this.contacts.push(contact)
    }

    getContacts () {
        return this.contacts
    }

    deleteContact (id: number) {
        this.contacts = this.contacts.filter(contact => contact.id !== id)
    }

    findContact (text: string) {
        const contact = this.contacts.filter(contact => contact.nombre === text)
        console.log('Contactos del find: ', contact)

        if (contact.length > 0) {
            console.log(`Se encontró un contacto con el nombre ${text}`, contact)
        } else {
            console.log(`No existe contacto con el nombre ${text}`)
        }
    }
}

// Instancio una nueva lista de contactos:
const myContactList = new ContactList()

// Creamos un nuevo contacto:
const contacto1: IContact = {
    id: myContactList.generarId(),
    nombre: 'Martín',
    eMail: 'martin@mail.com',
    nroTelefono: '123456786'
}
// Añadimos el primer contacto:
myContactList.addContact(contacto1)

// Creamos un nuevo contacto:
const contacto2: IContact = {
    id: myContactList.generarId(),
    nombre: 'Cairos',
    eMail: 'cairos@mail.com',
    nroTelefono: '123456786'
}
// Añadimos el segundo contacto:
myContactList.addContact(contacto2)

// Creamos un nuevo contacto:
const contacto3: IContact = {
    id: myContactList.generarId(),
    nombre: 'Tulio',
    eMail: 'tulio@mail.com',
    nroTelefono: '123456786'
}
// Añadimos el tercer contacto:
myContactList.addContact(contacto3)

// Mostramos nuestra lista de tareas:
console.log('Lista de contactos: ', myContactList.getContacts())

// Buscamos un contacto por nombre:
myContactList.findContact("Martín")

// Buscamos un contacto que sabemos que no existe:
myContactList.findContact("Luffy")

myContactList.deleteContact(2)

console.log('Lista de contactos: ', myContactList.getContacts())
