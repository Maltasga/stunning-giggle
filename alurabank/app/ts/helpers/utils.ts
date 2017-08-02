import { Imprimivel } from "../models/index";

export function imprime(...imp: Imprimivel[]): void {
    imp.forEach(x => x.paraTexto());
}