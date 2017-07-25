var Negociacoes = (function () {
    function Negociacoes() {
        this._negociacoes = [];
    }
    Negociacoes.prototype.adiciona = function (model) {
        this._negociacoes.push(model);
    };
    Negociacoes.prototype.paraArray = function () {
        return [].concat(this._negociacoes);
    };
    return Negociacoes;
}());
