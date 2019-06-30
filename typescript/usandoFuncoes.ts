let isEnoughToBeatMF = function (persecs: number) : boolean{
    return persecs < 12
}

let distance = 14

console.log(`Is ${distance} persecs enough to beat Millenium Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : 'No'}` )

/*************************************************/
let call = (name: string) => console.log(`foi copiado do ${name}`)

call("R2")
/*************************************************************/

function inc (speedy: number, inc:number = 1) : number {
  return speedy + inc
}

console.log(inc(5,2))
console.log(inc(5))
