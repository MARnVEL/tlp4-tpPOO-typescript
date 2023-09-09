
/*
enum Kind {
    Ethereal,
    Tangible,
    EtherealAndTangible
}
*/

type Kind = "Ethereal" | "Tangible" | "EtherealAndTangibe"

export class Pet {
    constructor (
        private name: string,
        private happinesLevel: number,
        private kind: Kind
    ) {}

    getName (): string {
        return this.name
    }

    getKind (): Kind {
        return this.kind
    }

    getHappinesLevel (): number {
        return this.happinesLevel
    }

    increaseHappinesLevel (level: number) {
        this.happinesLevel = this.happinesLevel + level
        return this.happinesLevel
    }

    decreaseHappinesLevel (level: number) {
        this.happinesLevel = this.happinesLevel - level
        return this.happinesLevel
    }

    changeName (newName: string) {
        this.name = newName
        console.log('Nombre cambiado exitosamente: ', this.name)
        return this.name
    }
}
