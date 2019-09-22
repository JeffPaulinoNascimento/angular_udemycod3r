"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NotificationService = (function () {
    function NotificationService() {
        this.notifier = new core_1.EventEmitter();
    }
    NotificationService.prototype.notify = function (message) {
        this.notifier.emit(message);
    };
    return NotificationService;
}());
exports.NotificationService = NotificationService;
