import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JoueurenDemande } from '../Models/joueuren-demande';
@Injectable({
  providedIn: 'root'
})
export class JoueurenDemandeService {
  private url = "http://localhost:8080/api/joueursEnDemande";

  constructor(private http: HttpClient) { }
  get(): Observable<JoueurenDemande[]> {
    return this.http.get<JoueurenDemande[]>(`${this.url}`);
  }

  add(c: JoueurenDemande): Observable<object> {
    return this.http.post(`${this.url}`, c);
  }

  deleteData(id: string): Observable<any> {

    return this.http.delete(`${this.url} / ${id}`, { responseType: 'text' });
  }
  update(id: number, c: JoueurenDemande): Observable<Object> {
    return this.http.put(`${this.url} / ${id}`, c);
  }

}
