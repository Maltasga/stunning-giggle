System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View;
    return {
        setters: [],
        execute: function () {
            View = (function () {
                function View(seletor, parametroOpcional) {
                    this._container = $(seletor);
                }
                View.prototype.update = function (model) {
                    this._container.html(this.template(model));
                };
                return View;
            }());
            exports_1("View", View);
        }
    };
});
