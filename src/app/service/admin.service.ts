import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../Models/admin';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = "http://localhost:8080/api/admin";

  constructor(private http: HttpClient) { }
  get(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.url}`);
  }

  add(c: Admin): Observable<object> {
    return this.http.post(`${this.url}`, c);
  }

  deleteData(id: string): Observable<any> {

    return this.http.delete(`${this.url} / ${id}`, { responseType: 'text' });
  }
  update(id: number, c: Admin): Observable<Object> {
    return this.http.put(`${this.url} / ${id}`, c);
  }

}
