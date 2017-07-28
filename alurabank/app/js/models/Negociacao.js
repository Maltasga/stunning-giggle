System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacao;
    return {
        setters: [],
        execute: function () {
            Negociacao = (function () {
                function Negociacao(data, quantidade, valor) {
                    this.data = data;
                    this.quantidade = quantidade;
                    this.valor = valor;
                }
                Object.defineProperty(Negociacao.prototype, "volume", {
                    get: function () {
                        return this.quantidade * this.valor;
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
