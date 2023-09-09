
import { Pet } from "./Pet"

export class Garden {
    private thePets: Pet[] = []

    constructor (private name: string) {}

    addPet (pet: Pet) {
        this.thePets.push(pet)
        console.log('Mascota agregada correctamente! ')
    }

    getPets () {
        return this.thePets
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

const perro1 = new Pet('Ramón', 25, 'Tangible')
const kyogin = new Pet('Arnaldo', 200, 'Ethereal')
const acelga = new Pet('Fatmaghul', 60, 'EtherealAndTangible')
const kuro = new Pet('Lucía', 385, 'Ethereal')

myGarden.addPet(kyogin)
myGarden.addPet(acelga)
myGarden.addPet(perro1)
myGarden.addPet(kuro)

console.log('Lista de mascotas: ', myGarden.getPets())
console.log('Mascota sin alimentar: ', perro1)

myGarden.feed(perro1)

console.log('Mascota alientada: ', perro1)

console.log(perro1.getHappinesLevel())

console.log('Lista de mascotas: ', myGarden.getPets())
