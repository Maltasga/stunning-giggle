System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __moduleName = context_1 && context_1.id;
    var View_1, NegociacoesView;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            NegociacoesView = (function (_super) {
                __extends(NegociacoesView, _super);
                function NegociacoesView() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                NegociacoesView.prototype.template = function (model) {
                    return "\n        <table class=\"table table-hover table-bordered\">\n            <thead>\n                <tr>\n                    <th>DATA</th>\n                    <th>QUANTIDADE</th>\n                    <th>VALOR</th>\n                    <th>VOLUME</th>\n                </tr>\n            </thead>\n\n            <tbody>\n            " + model.paraArray().map(function (i) {
                        return "\n                    <tr>\n                        <td>" + i.data.getDate() + "/" + (i.data.getMonth() + 1) + "/" + i.data.getFullYear() + "</td>\n                        <td>" + i.quantidade + "</td>\n                        <td>" + i.valor + "</td>\n                        <td>" + i.volume + "</td>\n                    </tr>                        \n                ";
                    }).join('') + " \n            </tbody>\n\n            <tfoot>\n            </tfoot>\n        </table>\n        ";
                };
                return NegociacoesView;
            }(View_1.View));
            exports_1("NegociacoesView", NegociacoesView);
        }
    };
});
