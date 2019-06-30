import{Spacecraft, ContainerShip} from './base-ships'
import{MilleniumFalcon} from './starfighters'

//* importa tudo
// _ é uma variavel padrão do lodash, igual a variavel $ do jquery
import * as _ from 'lodash'

// coloca um titulo com tamanho 40 com o sinal de = antes e depois do texto
console.log(_.pad("Exemplos Typescrip", 40, "="))

let spacecraft = new Spacecraft("hiperdrive")
spacecraft.saltarParaHiperEspaco();

let milleniumFalcon = new MilleniumFalcon()
milleniumFalcon.saltarParaHiperEspaco()

let naveBoaParaCarga = (nave: ContainerShip) => nave.cargoContainers > 2

console.log(`Essa falcon é boa para o trabalho? ${naveBoaParaCarga(milleniumFalcon) ? 'YES' : 'NÃO'}`)
