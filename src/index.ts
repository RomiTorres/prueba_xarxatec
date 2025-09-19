import { Detergente } from "./Detergente.js";

const detergente1 = new Detergente("Magistral", 2.15);
detergente1.setDescuento(0.1)
console.log(`El precio del detergente con el descuento es: ${detergente1.getPrecioDescuento()}`)