import { Circle, Figure, Square, Triangle } from './TodoList'

export class Geometry {
  constructor (private figure: Figure) {}

  area () {
    return this.figure.getArea()
  }
}

const cuadrado = new Square(3)
const triangulo = new Triangle(3, 6)
const circulo = new Circle(5)

const geom1 = new Geometry(cuadrado)
const geom2 = new Geometry(triangulo)
const geom3 = new Geometry(circulo)

console.log(geom1.area)
console.log(geom2.area)
console.log(geom3.area)
