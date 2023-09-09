import { Circle, IFigure, Square, Triangle } from './Figures'

export class Geometry {
  constructor (private figure: IFigure) {}

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

console.log(geom1.area())
console.log(geom2.area())
console.log(geom3.area())
