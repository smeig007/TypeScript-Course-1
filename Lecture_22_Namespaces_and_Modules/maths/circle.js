define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //
    exports.PI = 3.14;
    //
    function calculateMyCircumference(diameter) {
        return exports.PI * diameter;
    }
    exports.calculateMyCircumference = calculateMyCircumference;
});
