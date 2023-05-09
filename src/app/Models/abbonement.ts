export class Abbonement {
  id: number
  code: string
  qte: number
  libelle: string
  image: string
  prix: number
  details: string
  constructor(
    id: number,
    code: string,
    qte: number,
    libelle: string,
    image: string,
    prix: number,
    details: string
  ) {
    this.id = id
    this.code = code
    this.qte = qte
    this.libelle = libelle
    this.image = image
    this.prix = prix
    this.details = details
  }

}
