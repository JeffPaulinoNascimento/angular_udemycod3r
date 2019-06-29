function inc(speed:number, inc:number = 1):number {
    return speed + inc
}

console.log(inc(5,5))
console.log(inc(5))

console.log("----------------------------------------")

function optionalParameter (speedy: number, inc?:number) : number{
  let i = inc || 1
  return speedy + 1
}

console.log(optionalParameter(5,5))
console.log(optionalParameter(5))

console.log("----------------------------------------")

let call:(name:string) => void
call = name => console.log("Do you copy, " + name + "?")

call("R2")

console.log("----------------------------------------")
console.log("Parametros REST")

function countJedis(jedis:number[]): number{
  return jedis.reduce((a,b) => a + b, 0)
}

console.log(countJedis([2,3,4]))

console.log("Sem passar colchetes na chamada do metodo, basta adicionar ... antes do parametro de array ")


function countJedisREST(...jedis:number[]): number{
  return jedis.reduce((a,b) => a + b, 0)
}

console.log(countJedisREST(2,3,4)) //sem o colchetes
console.log(countJedisREST(2,3,4,5,6,7)) //sem o colchetes
console.log(countJedisREST(10,10,10)) //sem o colchetes
