export class Donation {
  id: number
   nom: string
   prenom: string
   prix: number
  constructor(
    id: number,
    nom: string,
    prenom: string,
    prix: number
  ) {
    this.id = id
    this.nom = nom
    this.prenom = prenom
    this.prix = prix
  }
}
