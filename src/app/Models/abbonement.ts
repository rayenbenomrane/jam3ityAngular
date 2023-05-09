export class Abbonement {
  private  id:number
    private code:string
    private qte:number
    private libelle:string
    private image:string
    private prix:number
    private details:string
  constructor(
    id: number,
    code: string ,
    qte: number ,
    libelle: string ,
    image: string ,
    prix: number ,
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
