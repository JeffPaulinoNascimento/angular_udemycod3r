import {Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/throw'

export class ErrorHandler{
  static handleError(error: Response | any ){
    let errorMessage: string
    // se error for instancia de Response
    if(error instanceof Response){
      errorMessage = `Erro ${error.status} ao obter a URL ${error.url} - ${error.statusText}`
    }else{
      errorMessage = error.toString()
    }
    console.log(errorMessage)
    return Observable.throw(errorMessage)
  }
}
