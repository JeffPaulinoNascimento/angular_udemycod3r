export class User{

  constructor(public email: string, public name: string, private password: string){}

  matches(another: User): boolean{
    return another !== undefined &&
      another.email === this.email &&
      another.password === this.password
  }

}

export const users: {[key: string]: User} = { //tipando objeto que possue chaves, primeiro a chave é do tipo string e o valor do tipo user
  "juliana@gmail.com": new User ('juliana@gmail.com', 'Juliana', 'juliana23'),
  "amanda@gmail.com": new User ('amanda@gmail.com', 'Amanda', 'amanda21'),
}
