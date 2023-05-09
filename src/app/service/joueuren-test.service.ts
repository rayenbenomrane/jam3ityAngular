import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JoueurenTest } from '../Models/joueuren-test';
@Injectable({
  providedIn: 'root'
})
export class JoueurenTestService {

  private url = "http://localhost:8080/api/joueursEnTest";

  constructor(private http: HttpClient) { }
  get(): Observable<JoueurenTest[]> {
    return this.http.get<JoueurenTest[]>(`$ { this.url }`);
  }

  add(c: JoueurenTest): Observable<object> {
    return this.http.post(`${this.url}`, c);
  }

  deleteData(id: string): Observable<any> {

    return this.http.delete(`${this.url} / ${id}`, { responseType: 'text' });
  }
  update(id: number, c: JoueurenTest): Observable<Object> {
    return this.http.put(`${this.url} / ${id}`, c);
  }
}
