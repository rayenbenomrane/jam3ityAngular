import { JoueurService } from '../../service/joueur.service';
import { Component, OnInit } from '@angular/core';
import { Joueurs } from '../../Models/joueurs';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit {

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

}
