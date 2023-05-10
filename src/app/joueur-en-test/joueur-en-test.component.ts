import { JoueurenTest } from '../Models/joueuren-test';
import { JoueurenTestService } from './../service/joueuren-test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joueur-en-test',
  templateUrl: './joueur-en-test.component.html',
  styleUrls: ['./joueur-en-test.component.css']
})
export class JoueurEnTestComponent implements OnInit {

  article: JoueurenTest[] = [];

  constructor(private JoueurenTestService: JoueurenTestService) { }

  ngOnInit(): void {
    this.getart();
  }
  getart() {
    this.JoueurenTestService.get().subscribe(data => {
      this.article = data;
    })
  }
  delete(code: string) {

    if (window.confirm('Are sure you want to delete ' + code + " ?")) {
      this.JoueurenTestService.deleteData(code)
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
