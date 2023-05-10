import { JoueurenDemandeService } from './../service/joueuren-demande.service';
import { JoueurenTestService } from './../service/joueuren-test.service';
import { Component, OnInit } from '@angular/core';
import { JoueurEnTestComponent } from '../joueur-en-test/joueur-en-test.component';
import { JoueurenTest } from '../Models/joueuren-test';
import { JoueurenDemande } from '../Models/joueuren-demande';

@Component({
  selector: 'app-joueur-en-demande',
  templateUrl: './joueur-en-demande.component.html',
  styleUrls: ['./joueur-en-demande.component.css']
})
export class JoueurEnDemandeComponent implements OnInit {

  article: JoueurenDemande[] = [];
  constructor(private JoueurenDemandeService: JoueurenDemandeService) { }

  ngOnInit(): void {
    this.getart();
  }
  getart() {
    this.JoueurenDemandeService.get().subscribe(data => {
      this.article = data;
    })
  }
  delete(code: string) {

    if (window.confirm('Are sure you want to delete ' + code + " ?")) {
    this.JoueurenDemandeService.deleteData(code)

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
