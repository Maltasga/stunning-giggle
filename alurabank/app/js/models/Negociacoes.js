System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacoes;
    return {
        setters: [],
        execute: function () {
            Negociacoes = (function () {
                function Negociacoes() {
                    this._negociacoes = [];
                }
                Negociacoes.prototype.adiciona = function (model) {
                    this._negociacoes.push(model);
                };
                Negociacoes.prototype.paraArray = function () {
                    return [].concat(this._negociacoes);
                };
                Negociacoes.prototype.paraTexto = function () {
                    console.log(JSON.stringify(this._negociacoes));
                };
                Negociacoes.prototype.ehIgual = function (objeto) {
                    return JSON.stringify(this._negociacoes) == JSON.stringify(objeto.paraArray());
                };
                return Negociacoes;
            }());
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
