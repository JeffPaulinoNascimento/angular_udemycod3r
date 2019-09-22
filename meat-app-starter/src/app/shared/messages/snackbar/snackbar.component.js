"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var rxjs_1 = require("rxjs");
var SnackbarComponent = (function () {
    function SnackbarComponent(notificationService) {
        this.notificationService = notificationService;
        this.message = 'Hello there';
        this.snackVisibility = 'hidden';
    }
    SnackbarComponent.prototype.ngOnInit = function () {
        /**
         * Dessa forma ao mostrar a primeira mensagem o timer é startado, se clicar em outro item no carrinho vai mostrar outra mensagem e um novo timer será startado
         * sendo assim ocorrerá um problema de concorrencia de timer onde antes de mostrar a mesagem o ultimo timer terá esgotado o tempo e fechará a mensagem*/
        // this.notificationService.notifier.subscribe(message => {
        //   this.message = message
        //   this.snackVisibility = 'visible'
        //   Observable.timer(3000).subscribe(timer => this.snackVisibility = 'hidden')
        // })
        var _this = this;
        /**
         * CORREÇÃO --> Dessa forma enquanto esttou clicando no item do carrinho ele fica mostrando a mensagem e startando o timer, porem se eu fizer um novo clique
         * ele mostrará uma nova mensagem e um novo timer será startado apagando o anterior, ou seja o ultimo é o que conta
         *
         * Dessa forma os dois observables estão em uma configuração só*/
        this.notificationService.notifier.do(function (message) {
            _this.message = message;
            _this.snackVisibility = 'visible';
        }).switchMap(function (message) { return rxjs_1.Observable.timer(3000); }).subscribe(function (timer) { return _this.snackVisibility = 'hidden'; });
    };
    SnackbarComponent = __decorate([
        core_1.Component({
            selector: 'mt-snackbar',
            templateUrl: './snackbar.component.html',
            styleUrls: ['./snackbar.component.css'],
            animations: [
                animations_1.trigger('snack-visibility', [
                    animations_1.state('hidden', animations_1.style({
                        opacity: 0,
                        bottom: '0px'
                    })),
                    animations_1.state('visible', animations_1.style({
                        opacity: 1,
                        bottom: '30px'
                    })),
                    animations_1.transition('hidden => visible', animations_1.animate('500ms 0s ease-in')),
                    animations_1.transition('visible => hidden', animations_1.animate('500ms 0s ease-out'))
                ])
            ]
        })
    ], SnackbarComponent);
    return SnackbarComponent;
}());
exports.SnackbarComponent = SnackbarComponent;
