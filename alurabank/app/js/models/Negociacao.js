var Negociacao = (function () {
    function Negociacao(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    Object.defineProperty(Negociacao.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Negociacao.prototype, "quantidade", {
        get: function () {
            return this._quantidade;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Negociacao.prototype, "valor", {
        get: function () {
            return this._valor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Negociacao.prototype, "volume", {
        get: function () {
            return this._quantidade * this._valor;
        },
        enumerable: true,
        configurable: true
    });
    return Negociacao;
}());
