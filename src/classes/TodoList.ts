
export interface Figure {
    getArea(): number;
}

export class Square implements Figure {
  constructor (private side: number) {}
  getArea (): number {
    return this.side ** 2
  }
}

export class Circle implements Figure {
  constructor (private diameter: number) {}
  getArea (): number {
    return (Math.PI * this.diameter) / 4
  }
}

export class Triangle implements Figure {
  constructor (private height: number, private base: number) {}
  getArea (): number {
    return (this.height * this.base) / 2
  }
}
