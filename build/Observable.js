"use strict";
exports.__esModule = true;
var DefaultObservable = /** @class */ (function () {
    function DefaultObservable(handler) {
        this.handler = handler;
    }
    DefaultObservable.prototype.subscribe = function (observer) {
        return this.handler(observer);
    };
    return DefaultObservable;
}());
