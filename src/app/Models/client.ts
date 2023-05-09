export class Client {
   id: number
   nom: string
   prenom: string
  tel: string
  email: string
   pwd: string
  constructor(
    id: number,
    nom: string,
    prenom: string,
    tel: string,
    email: string,
    pwd: string
  ) {
    this.id = id
    this.nom = nom
    this.prenom = prenom
    this.tel = tel
    this.email = email
    this.pwd = pwd
  }
}
