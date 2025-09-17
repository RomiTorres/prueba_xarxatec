export interface IAlimento {
  setCaducidad(fecha: Date): void;
  getCaducidad(): Date;
  getCalorias(): number;
}