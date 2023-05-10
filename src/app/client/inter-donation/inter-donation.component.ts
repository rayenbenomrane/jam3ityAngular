import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inter-donation',
  templateUrl: './inter-donation.component.html',
  styleUrls: ['./inter-donation.component.css']
})
export class InterDonationComponent implements OnInit {

  donation = {
    name: '',
    email: '',
    anonymous: false,
    amount: 0
  };

  constructor(private Http: HttpClient) { }
  ngOnInit(): void {

  }

  onSubmit() {
    this.Http.post('/api/donations', this.donation)
      .subscribe(res => console.log('Donation added to database.'));
  }
}

