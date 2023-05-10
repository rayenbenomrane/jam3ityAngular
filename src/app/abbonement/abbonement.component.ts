import { Abbonement } from './../Models/abbonement';

import { AbbonementService } from './../service/abbonement.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-abbonement',
  templateUrl: './abbonement.component.html',
  styleUrls: ['./abbonement.component.css']
})
export class AbbonementComponent implements OnInit {
  newAbbonement: Abbonement = new Abbonement(0, '', 0, '', '', 0, '');
  selectedArticle: any;

  showPopup = false;
  showEditPopup = false;
  article: Abbonement[] = [];
  constructor(private AbbonementService: AbbonementService) { }

  ngOnInit(): void {
    this.getart();
  }
  getart() {
    this.AbbonementService.get().subscribe(data => {
      this.article = data;
    })
  }
  delete(code: string) {

    if (window.confirm('Are sure you want to delete ' + code + " ?")) {
      this.AbbonementService.deleteData(code)
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
    this.AbbonementService.add(this.newAbbonement).subscribe(() => {
      this.showPopup = false;
      this.getart();
    });
  }
  editArticle(article: any) {
    this.selectedArticle = article;
    this.showPopup = true;
  }
  onSubmit1() {
    this.AbbonementService.update(this.selectedArticle.code, this.selectedArticle).subscribe(() => {
      this.showPopup = false;
      this.getart();
    })
  }
}
