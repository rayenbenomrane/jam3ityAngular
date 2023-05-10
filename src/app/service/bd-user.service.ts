import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BdUser } from '../Models/bd-user';
import { Client } from '../Models/client';

@Injectable({
  providedIn: 'root'
})
export class BdUserService {

  private url = "http://localhost:8080/api/bduser";

  constructor(private Http: HttpClient) { }
  get(): Observable<BdUser[]> {
    return this.Http.get<BdUser[]>(`${this.url}`);
  }

  add(c: BdUser): Observable<object> {
    return this.Http.post(`${this.url}`, c);
  }

  deleteData(id: string): Observable<any> {

    return this.Http.delete(`${this.url} / ${id}`, { responseType: 'text' });
  }
  update(id: number, c: BdUser): Observable<Object> {
    return this.Http.put(`${this.url} / ${id}`, c);
  }
}
