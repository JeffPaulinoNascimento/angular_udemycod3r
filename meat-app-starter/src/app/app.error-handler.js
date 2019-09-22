"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/throw");
var ErrorHandler = (function () {
    function ErrorHandler() {
    }
    ErrorHandler.handleError = function (error) {
        var errorMessage;
        if (error instanceof http_1.HttpErrorResponse) {
            var body = error.error;
            errorMessage = error.url + ": " + error.status + " - " + (error.statusText || '') + " " + body;
        }
        else {
            errorMessage = error.message ? error.message : error.toString();
        }
        console.log(errorMessage);
        return Observable_1.Observable.throw(errorMessage);
    };
    return ErrorHandler;
}());
exports.ErrorHandler = ErrorHandler;
