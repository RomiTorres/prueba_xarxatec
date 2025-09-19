import { IDescuento } from "./IDescuento.js";
import { ILiquido } from "./ILiquido.js";

export class Detergente implements ILiquido, IDescuento {
  #marca: string;
  #precio: number;
  #volumen: number;
  #tipoEnvase: string;
  #descuento: number;

  constructor(nuevaMarca: string, nuevoPrecio: number) {
    this.#marca = nuevaMarca;
    this.#precio = nuevoPrecio;
  }

  get marca(): string {
    return this.#marca;
  }

  get precio(): number {
    return this.#precio;
  }

  set marca(nuevaMarca: string) {
    this.#marca = nuevaMarca;
  }

  set precio(nuevoPrecio: number) {
    this.#precio = nuevoPrecio;
  }

  setVolumen(nuevoVolumen: number): void {
    this.#volumen = nuevoVolumen;
  }

  getVolumen(): number {
    return this.#volumen;
  }

  setTipoEnvase(tipo: string): void {
    this.#tipoEnvase = tipo;
  }
  getTipoEnvase(): string {
    return this.#tipoEnvase;
  }

  setDescuento(descuento: number): void {
    this.#descuento = descuento;
  }
  
  getDescuento(): number {
    return this.#descuento;
  }

  getPrecioDescuento(): number {
    return parseFloat((this.#precio *(1-this.#descuento)).toFixed(2))
  }

  toString(): string {
    return (`Marca: ${this.#marca}\n Precio: ${this.#precio}\n Volumen: ${this.#volumen}\n Tipo Envase: ${this.#tipoEnvase}\n Descuento: ${this.#descuento}`);

  }
}