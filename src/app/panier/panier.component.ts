import { PanierService } from './../service/panier.service';
import { Component, OnInit } from '@angular/core';
import { Panier } from '../Models/panier';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  article: Panier[] = [];
  constructor(private PanierService: PanierService) { }

  ngOnInit(): void {
    this.getart();
  }
  getart() {
    this.PanierService.get().subscribe(data => {
      this.article = data;
    })
  }
  delete(code: string) {

    if (window.confirm('Are sure you want to delete ' + code + " ?")) {
      this.PanierService.deleteData(code)
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
