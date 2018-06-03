import { Injectable } from '@angular/core';
import { Episode } from '../models/episode.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap, switchMap } from 'rxjs/operators';


@Injectable()
export class EpisodeService {



  constructor(private http: HttpClient) { }

  // Getter
  public getAllEpisodesBySerie(idSerie: number): Observable<any> {
    return this.http.get<any>('/api/episodes/getAllEpisodes/' + idSerie);
  }

  // Visionnning
  public addVision(req: any): Observable<any> {

    return this.http.post<any>('/api/users/' + req.idUser + '/addEpisodeVisionne/' + req.idE, req);
  }

  public removeVision(req: any): Observable<any> {

    return this.http.delete<any>('/api/users/' + req.idUser + '/deleteEpisodeVisionne/' + req.idE); // , req
  }

  // CRUD

  public insertEpisode(episode): Observable<any> {
    return this.http.post<any>('/api/episodes/insert', episode);
  }
  public deleteEpisode(id) {
    return this.http.delete('api/episodes/delete/' + id);
  }
}
