import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Donation } from '../Models/donation';
@Injectable({
  providedIn: 'root'
})
export class DonationService {

  private url = "http://localhost:8080/api/donation";

  constructor(private http: HttpClient) { }
  get(): Observable<Donation[]> {
    return this.http.get<Donation[]>(`$ { this.url }`);
  }

  add(c: Donation): Observable<object> {
    return this.http.post(`${this.url}`, c);
  }

  deleteData(id: string): Observable<any> {

    return this.http.delete(`${this.url} / ${id}`, { responseType: 'text' });
  }
  update(id: number, c: Donation): Observable<Object> {
    return this.http.put(`${this.url} / ${id}`, c);
  }
}
