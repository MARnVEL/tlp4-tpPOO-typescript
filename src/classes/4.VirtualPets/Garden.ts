import { Pet } from "./Pet"

enum Kind {
    Ethereal = 'Ethereal',
    Tangible = 'Tangible',
    EtherealAndTangible = 'EtherealAndTangibe'
}

export class Garden {
    private thePets: Pet[] = []

    constructor (private name: string) {}

    addPet (pet: Pet) {
        this.thePets.push(pet)
        console.log('Mascota agregada correctamente! ')
    }

    feed (pet: Pet) {
        pet.increaseHappinesLevel(50)
        console.log('Mascota alimentada correctamente')
    }

    takeCare (pet: Pet) {
        pet.increaseHappinesLevel(10)
    }

    goToPlay (pet: Pet) {
        pet.increaseHappinesLevel(25)
    }

    getState (pet: Pet) {
        return pet.getHappinesLevel()
    }
}

const myGarden = new Garden('Neverland')

const perro1 = new Pet('Ramón', 25, Kind.Tangible)

myGarden.addPet(perro1)

console.log('Mascota sin alimentar: ', perro1)

myGarden.feed(perro1)

console.log('Mascota alientada: ', perro1)
