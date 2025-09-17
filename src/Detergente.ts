export class Detergente {
  #marca: string;
  #precio: number;
  descuento: number;

  constructor(marca:string, precio:number) {
    this.#marca = marca;
    this.#precio = precio;
  }

  get marca(): string {
    return this.#marca;
  }

  get precio(): number {
    return this.#precio;
  }

  set marca(marca:string) {
     this.#marca = marca;
  }

  set precio(precio:number) {
    this.#precio = precio;
  }

}