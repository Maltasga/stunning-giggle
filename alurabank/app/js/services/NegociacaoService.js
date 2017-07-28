System.register(["../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, NegociacaoService;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            NegociacaoService = (function () {
                function NegociacaoService() {
                }
                NegociacaoService.prototype.obterNegociacoes = function (handler) {
                    var promisse = fetch('http://localhost:8080/dados')
                        .then(function (res) { return handler(res); })
                        .then(function (res) { return res.json(); })
                        .then(function (dados) {
                        return dados.map(function (dado) { return new index_1.Negociacao(new Date(), dado.vezes, dado.montante); });
                    })
                        .catch(function (err) { return console.log(err); });
                    return promisse;
                };
                return NegociacaoService;
            }());
            exports_1("NegociacaoService", NegociacaoService);
        }
    };
});
