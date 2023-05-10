import { Injectable } from '@angular/core';
import { Abbonement } from '../Models/abbonement';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbbonementService {
  private url = "http://localhost:8080/api/abonnement";

  constructor(private http: HttpClient) { }
  get(): Observable<Abbonement[]> {
    return this.http.get<Abbonement[]>(`${this.url}`);
  }

  add(c: Abbonement): Observable<object> {
    return this.http.post(`${this.url}`, c);
  }

  deleteData(id: string): Observable<any> {

    return this.http.delete(`${this.url} / ${id}`, { responseType: 'text' });
  }
  update(id: number, c: Abbonement): Observable<Object> {
    return this.http.put(`${this.url} / ${id}`, c);
  }

}
