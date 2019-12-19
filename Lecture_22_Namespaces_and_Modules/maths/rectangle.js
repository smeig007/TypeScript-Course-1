define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //
    //
    // I can also add the keyword - default - this tells Typescript (and javascript) that this is the default (or only) thing you need to import - the import statement must also change....
    //
    function calculateMyRectangle(width, length) {
        return width * length;
    }
    exports.default = calculateMyRectangle;
});
