System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacao;
    return {
        setters: [],
        execute: function () {
            Negociacao = (function () {
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
            exports_1("Negociacao", Negociacao);
        }
    };
});
