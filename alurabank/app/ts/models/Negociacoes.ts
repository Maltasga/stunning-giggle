import { Negociacao } from "./Negociacao"

export class Negociacoes {
    private _negociacoes: Negociacao[] = [];

    adiciona(model: Negociacao): void {
        this._negociacoes.push(model);
    }

    paraArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

}