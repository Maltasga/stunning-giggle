System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function imprime() {
        var imp = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            imp[_i] = arguments[_i];
        }
        imp.forEach(function (x) { return x.paraTexto(); });
    }
    exports_1("imprime", imprime);
    return {
        setters: [],
        execute: function () {
        }
    };
});
