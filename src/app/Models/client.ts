export class Client {
  private id: number
  private nom: string
  private prenom: string
  private tel: string
  private email: string
  private pwd: string
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
