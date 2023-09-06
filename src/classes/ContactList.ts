import { Contact } from "./Contact"

export class ContactList {
    private contacts: Contact[] = []

    generarId (): number {
        const arrayIds = this.contacts.map(contact => contact.id)
        if (!arrayIds.length) {
            arrayIds.push(0)
        }
        return Math.max(...arrayIds) + 1
    }

    addTodo (contact: Contact) {
        this.contacts.push(contact)
    }

    getTodos () {
        return this.contacts
    }

    deleteTodo (id: number) {
        this.contacts = this.contacts.filter(contact => contact.id !== id)
    }
}
