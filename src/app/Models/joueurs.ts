export class Joueurs {
  private id: number
  private nom: string
  private prenom: string
  private dateDeNaissance: Date
  private poste: string
  private tel: string
  private email: string
  constructor(
    id: number,
    nom: string,
    prenom: string,
    dateDeNaissance: Date,
    poste: string,
    tel: string,
    email: string
  ) {
    this.id = id
    this.nom = nom
    this.prenom = prenom
    this.dateDeNaissance = dateDeNaissance
    this.poste = poste
    this.tel = tel
    this.email = email
  }
}
