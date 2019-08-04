import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations'
import {NotificationService} from '../notification.service'
import {Observable} from 'rxjs'

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden',style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible',style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string = 'Hello there'
  snackVisibility: string = 'hidden'

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    /**
     * Dessa forma ao mostrar a primeira mensagem o timer é startado, se clicar em outro item no carrinho vai mostrar outra mensagem e um novo timer será startado
     * sendo assim ocorrerá um problema de concorrencia de timer onde antes de mostrar a mesagem o ultimo timer terá esgotado o tempo e fechará a mensagem*/
    // this.notificationService.notifier.subscribe(message => {
    //   this.message = message
    //   this.snackVisibility = 'visible'
    //   Observable.timer(3000).subscribe(timer => this.snackVisibility = 'hidden')
    // })


    /**
     * CORREÇÃO --> Dessa forma enquanto esttou clicando no item do carrinho ele fica mostrando a mensagem e startando o timer, porem se eu fizer um novo clique
     * ele mostrará uma nova mensagem e um novo timer será startado apagando o anterior, ou seja o ultimo é o que conta
     *
     * Dessa forma os dois observables estão em uma configuração só*/
    this.notificationService.notifier.do(message => {
      this.message = message
      this.snackVisibility = 'visible'
    }).switchMap(message => Observable.timer(3000)).subscribe(timer => this.snackVisibility = 'hidden')
  }

  // toggleSnack() {
  //   this.snackVisibility = this.snackVisibility === 'hidden' ? 'visible' : 'hidden'
  // }
}
