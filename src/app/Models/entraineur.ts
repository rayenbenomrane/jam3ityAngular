export class Entraineur {
  private id: number
  private nom: string
  private prenom: string
  private email: string
  private pwd: string
  private tel: string
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
