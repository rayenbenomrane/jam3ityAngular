import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BdAdmin } from '../Models/bd-admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BdAdminService {

  private url = "http://localhost:8080/api/bdadmin";

  constructor(private Http: HttpClient) { }
  get(): Observable<BdAdmin[]> {
    return this.Http.get<BdAdmin[]>(`${this.url}`);
  }

  add(c: BdAdmin): Observable<object> {
    return this.Http.post(`${this.url}`, c);
  }

  deleteData(id: string): Observable<any> {

    return this.Http.delete(`${this.url} / ${id}`, { responseType: 'text' });
  }
  update(id: number, c: BdAdmin): Observable<Object> {
    return this.Http.put(`${this.url} / ${id}`, c);
  }
}
