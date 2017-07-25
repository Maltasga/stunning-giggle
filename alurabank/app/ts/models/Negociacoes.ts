class Negociacoes {
    private _negociacoes: Negociacao[] = [];

    adiciona(model: Negociacao): void {
        this._negociacoes.push(model);
    }

    paraArray(): Negociacao[] {
        return [].concat(this._negociacoes);
    }

}