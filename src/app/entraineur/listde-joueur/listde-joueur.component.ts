import { JoueurService } from './../../service/joueur.service';
import { Component, OnInit } from '@angular/core';
import { Joueurs } from 'src/app/Models/joueurs';

@Component({
  selector: 'app-listde-joueur',
  templateUrl: './listde-joueur.component.html',
  styleUrls: ['./listde-joueur.component.css']
})
export class ListdeJoueurComponent implements OnInit {

  newAbbonement: Joueurs = new Joueurs(0, "", "", new Date(), "", "", "",);
  selectedArticle: any;

  showPopup = false;
  showEditPopup = false;
  article: Joueurs[] = [];
  constructor(private JoueurService: JoueurService) { }

  ngOnInit(): void {
    this.getart();
  }
  getart() {
    this.JoueurService.get().subscribe(data => {
      this.article = data;
    })
  }
  delete(code: string) {

    if (window.confirm('Are sure you want to delete ' + code + " ?")) {
      this.JoueurService.deleteData(code)
        .subscribe(
          data => {
            console.log(data);
            alert(' data successfully deleted!');
            this.getart();

          },
          error => console.log(error));
    }
  }
  openPopup() {
    this.showPopup = true;
  }
  onSubmit() {
    this.JoueurService.add(this.newAbbonement).subscribe(() => {
      this.showPopup = false;
      this.getart();
    });
  }
  editArticle(article: any) {
    this.selectedArticle = article;
    this.showPopup = true;
  }
  onSubmit1() {
    this.JoueurService.update(this.selectedArticle.code, this.selectedArticle).subscribe(() => {
      this.showPopup = false;
      this.getart();
    })
  }

}
