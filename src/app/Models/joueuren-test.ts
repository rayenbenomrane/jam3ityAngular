export class JoueurenTest {
  private id: number
  private nom: string
  private prenom: string
  private dateDeNaissance: Date
  private poste: string
  private tel: string
  private email: string
  private datedetest: Date
  constructor(
    id: number,
    nom: string,
    prenom: string,
    dateDeNaissance: Date,
    poste: string,
    tel: string,
    email: string,
    dt: Date
  ) {
    this.id = id
    this.nom = nom
    this.prenom = prenom
    this.dateDeNaissance = dateDeNaissance
    this.poste = poste
    this.tel = tel
    this.email = email
    this.datedetest = dt
  }
}
