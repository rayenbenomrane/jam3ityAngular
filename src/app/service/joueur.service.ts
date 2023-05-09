import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Joueurs } from '../Models/joueurs';
@Injectable({
  providedIn: 'root'
})
export class JoueurService {
  private url = "http://localhost:8080/api/joueurs";

  constructor(private http: HttpClient) { }
  get(): Observable<Joueurs[]> {
    return this.http.get<Joueurs[]>(`$ { this.url }`);
  }

  add(c: Joueurs): Observable<object> {
    return this.http.post(`${this.url}`, c);
  }

  deleteData(id: string): Observable<any> {

    return this.http.delete(`${this.url} / ${id}`, { responseType: 'text' });
  }
  update(id: number, c: Joueurs): Observable<Object> {
    return this.http.put(`${this.url} / ${id}`, c);
  }

}
