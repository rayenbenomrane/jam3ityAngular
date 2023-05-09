import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Panier } from '../Models/panier';
@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private url = "http://localhost:8080/api/panier";

  constructor(private http: HttpClient) { }
  get(): Observable<Panier[]> {
    return this.http.get<Panier[]>(`$ { this.url }`);
  }

  add(c: Panier): Observable<object> {
    return this.http.post(`${this.url}`, c);
  }

  deleteData(id: string): Observable<any> {

    return this.http.delete(`${this.url} / ${id}`, { responseType: 'text' });
  }
  update(id: number, c: Panier): Observable<Object> {
    return this.http.put(`${this.url} / ${id}`, c);
  }
}
