export interface IFigure {
    getArea(): number;
}

export class Square implements IFigure {
  constructor (private side: number) {}
  getArea (): number {
    return this.side ** 2
  }
}

export class Circle implements IFigure {
  constructor (private diameter: number) {}
  getArea (): number {
    return (Math.PI * this.diameter * this.diameter) / 4
  }
}

export class Triangle implements IFigure {
  constructor (private height: number, private base: number) {}
  getArea (): number {
    return (this.height * this.base) / 2
  }
}
