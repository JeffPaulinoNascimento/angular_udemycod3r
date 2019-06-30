class Spacecraft{

  constructor (public propulsor: string){}

  saltarParaHiperEspaco() {
    console.log(`Entrando no hiper espaco com ${this.propulsor}`)
  }
}

interface ContainerShip {

  cargoContainers: number
  //cargoContainers?: number //torna o atributo opicional, não precisando implementa-lo ao externder essa interface

}

export{Spacecraft, ContainerShip}
