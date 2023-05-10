import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entraineur } from '../Models/entraineur';

@Injectable({
  providedIn: 'root'
})
export class EntraineurService {

  private url = "http://localhost:8080/api/entraineur";

  constructor(private http: HttpClient) { }
  get(): Observable<Entraineur[]> {
    return this.http.get<Entraineur[]>(`${this.url}`);
  }

  add(c: Entraineur): Observable<object> {
    return this.http.post(`${this.url}`, c);
  }

  deleteData(id: string): Observable<any> {

    return this.http.delete(`${this.url} / ${id}`, { responseType: 'text' });
  }
  update(id: number, c: Entraineur): Observable<Object> {
    return this.http.put(`${this.url} / ${id}`, c);
  }
}
