import { DonationService } from './../service/donation.service';
import { Component, OnInit } from '@angular/core';
import { Donation } from '../Models/donation';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  article: Donation[] = [];
  constructor(private DonationService: DonationService) { }

  ngOnInit(): void {
    this.getart();
  }
  getart() {
    this.DonationService.get().subscribe(data => {
      this.article = data;
    })
  }
  delete(code: string) {

    if (window.confirm('Are sure you want to delete ' + code + " ?")) {
      this.DonationService.deleteData(code)
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
