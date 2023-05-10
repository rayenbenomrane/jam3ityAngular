import { ClientService } from './../service/client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../Models/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  article: Client[] = [];
  constructor(private ClientService: ClientService) { }

  ngOnInit(): void {
    this.getart();
  }
  getart() {
    this.ClientService.get().subscribe(data => {
      this.article = data;
    })
  }
  delete(code: string) {

    if (window.confirm('Are sure you want to delete ' + code + " ?")) {
      this.ClientService.deleteData(code)
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
