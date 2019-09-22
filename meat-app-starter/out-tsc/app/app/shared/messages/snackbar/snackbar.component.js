var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NotificationService } from '../notification.service';
import { Observable } from 'rxjs';
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
        }).switchMap(function (message) { return Observable.timer(3000); }).subscribe(function (timer) { return _this.snackVisibility = 'hidden'; });
    };
    SnackbarComponent = __decorate([
        Component({
            selector: 'mt-snackbar',
            templateUrl: './snackbar.component.html',
            styleUrls: ['./snackbar.component.css'],
            animations: [
                trigger('snack-visibility', [
                    state('hidden', style({
                        opacity: 0,
                        bottom: '0px'
                    })),
                    state('visible', style({
                        opacity: 1,
                        bottom: '30px'
                    })),
                    transition('hidden => visible', animate('500ms 0s ease-in')),
                    transition('visible => hidden', animate('500ms 0s ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [NotificationService])
    ], SnackbarComponent);
    return SnackbarComponent;
}());
export { SnackbarComponent };
//# sourceMappingURL=snackbar.component.js.map