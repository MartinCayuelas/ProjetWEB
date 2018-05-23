import { Injectable } from '@angular/core';
import { Episode } from '../models/episode.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap, switchMap } from 'rxjs/operators';


@Injectable()
export class EpisodeService {

  constructor(private http: HttpClient) { }

  public getAllEpisodesBySerie(idSerie: number): Observable<any> {
    console.log('episodes en Serivce');
    return this.http.get<any>('/api/episodes/getAllEpisodes/' + idSerie);
  }
}
