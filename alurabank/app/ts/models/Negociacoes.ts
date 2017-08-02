import { Negociacao, Imprimivel, Igualavel } from "./index"

export class Negociacoes implements Imprimivel, Igualavel<Negociacoes> {
    private _negociacoes: Negociacao[] = [];

    adiciona(model: Negociacao): void {
        this._negociacoes.push(model);
    }

    paraArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    paraTexto(): void {
        console.log(JSON.stringify(this._negociacoes));
    }

    ehIgual(objeto: Negociacoes): boolean {
        return JSON.stringify(this._negociacoes) == JSON.stringify(objeto.paraArray());
    }
}