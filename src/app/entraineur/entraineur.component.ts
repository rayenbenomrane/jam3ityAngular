import { EntraineurService } from './../service/entraineur.service';
import { Component, OnInit } from '@angular/core';
import { Entraineur } from '../Models/entraineur';

@Component({
  selector: 'app-entraineur',
  templateUrl: './entraineur.component.html',
  styleUrls: ['./entraineur.component.css']
})
export class EntraineurComponent implements OnInit {

  article: Entraineur[] = [];
  constructor(private EntraineurService: EntraineurService) { }

  ngOnInit(): void {
    this.getart();
  }
  getart() {
    this.EntraineurService.get().subscribe(data => {
      this.article = data;
    })
  }
  delete(code: string) {

    if (window.confirm('Are sure you want to delete ' + code + " ?")) {
      this.EntraineurService.deleteData(code)
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
