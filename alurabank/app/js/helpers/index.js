System.register(["./decorators/medidorPerformance", "./decorators/domInject", "./decorators/timeout", "./utils"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (medidorPerformance_1_1) {
                exportStar_1(medidorPerformance_1_1);
            },
            function (domInject_1_1) {
                exportStar_1(domInject_1_1);
            },
            function (timeout_1_1) {
                exportStar_1(timeout_1_1);
            },
            function (utils_1_1) {
                exportStar_1(utils_1_1);
            }
        ],
        execute: function () {
        }
    };
});
