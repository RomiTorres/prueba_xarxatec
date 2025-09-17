export interface ILiquido {
  setVolumen(nuevoVolumen: number): void;
  getVolumen(): number;
  setTipoEnvase(tipo: string): void;
  getTipoEnvase(): string;
}