export class Panier {
  private id: number
  private libelle: number
  private path: string
  private prix: number
  private total: number
  constructor(
    id: number,
    libelle: number,
    path: string,
    prix: number,
    total: number
  ) {
    this.id = id
    this.libelle = libelle
    this.path = path
    this.prix = prix
    this.total = total
  }
}
