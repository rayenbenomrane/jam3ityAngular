import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../Models/client';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url = "http://localhost:8080/api/client";

  constructor(private http: HttpClient) { }
  get(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.url}`);
  }

  add(c: Client): Observable<object> {
    return this.http.post(`${this.url}`, c);
  }

  deleteData(id: string): Observable<any> {

    return this.http.delete(`${this.url} / ${id}`, { responseType: 'text' });
  }
  update(id: number, c: Client): Observable<Object> {
    return this.http.put(`${this.url} / ${id}`, c);
  }
}
