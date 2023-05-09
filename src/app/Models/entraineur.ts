export class Entraineur {
  id: number
   nom: string
   prenom: string
   email: string
   pwd: string
  tel: string
  constructor(
    id: number,
    nom: string,
    prenom: string,
    email: string,
    pwd: string,
    tel: string
  ) {
    this.id = id
    this.nom = nom
    this.prenom = prenom
    this.email = email
    this.pwd = pwd
    this.tel = tel
  }
}
