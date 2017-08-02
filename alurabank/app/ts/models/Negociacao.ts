import { Imprimivel, Igualavel } from "./index";

export class Negociacao implements Imprimivel, Igualavel<Negociacao> {

    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {
    }

    get volume() {
        return this.quantidade * this.valor;
    }

    paraTexto(): void {
        console.log("Impressão");
        console.log(
            `Data: ${this.data}
            Quantidade: ${this.quantidade}
            Valor: ${this.valor}
            Volume: ${this.volume}`
        )
    }

    ehIgual(objeto: Negociacao): boolean {
        return this.data.getDate() == objeto.data.getDate()
            && this.data.getMonth() == objeto.data.getMonth()
            && this.data.getFullYear() == objeto.data.getFullYear();
    }
}