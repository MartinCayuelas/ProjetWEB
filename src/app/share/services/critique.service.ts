import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Critique } from '../models/critique.model';

@Injectable()
export class CritiqueService {

  constructor(private http: HttpClient) { }


  public getCritiques(id: number): Observable<any> {
    return this.http.get<any>('/api/critiques/getAllCritiques/' + id);

  }

  public createCritique(crit): Observable<Critique> {
    return this.http.post<Critique>('/api/critiques/insert', crit);

  }

  public deleteCritique(idC) {
    return this.http.delete('/api/critiques/delete/' + idC);
  }
}
