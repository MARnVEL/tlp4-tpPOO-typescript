
/*
enum Kind {
    Ethereal,
    Tangible,
    EtherealAndTangible
}
*/

type KindType = "Ethereal" | "Tangible" | "EtherealAndTangible"

export class Pet {
    constructor (
        private name: string,
        private happinesLevel: number,
        private kind: KindType
    ) {}

    getName (): string {
        return this.name
    }

    getKind (): KindType {
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
