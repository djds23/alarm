"use strict";
exports.__esModule = true;
var DefaultListenControl = /** @class */ (function () {
    function DefaultListenControl(cleanup) {
        this.cleanup = cleanup;
    }
    DefaultListenControl.prototype.stop = function () {
        this.cleanup();
    };
    return DefaultListenControl;
}());
exports.DefaultListenControl = DefaultListenControl;
