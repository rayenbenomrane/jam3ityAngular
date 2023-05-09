export class Panier {
  id: number
  libelle: number
  path: string
  prix: number
  total: number
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
