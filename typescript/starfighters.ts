import{Spacecraft, ContainerShip} from './base-ships' //caminho relativo a partir de onde esse arquivo esta

export class MilleniumFalcon extends Spacecraft implements ContainerShip{

  cargoContainers: number;

  constructor(){
      super("hiperdrive")
      this.cargoContainers = 3
  }

  //SOBRESCRITA DO METODO
  saltarParaHiperEspaco(){
    let math = Math.random();

    if(math >= 0.5){
      console.log("math = " + math)
      super.saltarParaHiperEspaco()
    }else{
      console.log("math =  " + math)
     console.log("Falha ao entrar no hiper espaço")
    }
  }
}
