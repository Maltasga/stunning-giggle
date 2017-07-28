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
                return Negociacoes;
            }());
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
