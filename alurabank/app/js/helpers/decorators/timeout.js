System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function timeout(milisegundos) {
        if (milisegundos === void 0) { milisegundos = 500; }
        return function (target, key, descriptor) {
            var metodoOriginal = descriptor.value;
            var timer = 0;
            descriptor.value = function () {
                var _this = this;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                clearInterval(timer);
                setTimeout(function () { metodoOriginal.apply(_this, args); }, milisegundos);
            };
            return descriptor;
        };
    }
    exports_1("timeout", timeout);
    return {
        setters: [],
        execute: function () {
        }
    };
});
