export class Cereales {
  #marca: string;
  #precio: number;
  #tipoCereal: string;

  constructor(marca: string, precio: number, tipoCereal:string) {
    this.#marca = marca;
    this.#precio = precio;
    this.#tipoCereal = tipoCereal;
  }
}