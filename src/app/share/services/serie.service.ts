import { Injectable } from '@angular/core';
import { Serie } from '../models/serie.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap, switchMap } from 'rxjs/operators';


@Injectable()
export class SerieService {

    constructor(private http: HttpClient) { }

    // GEtters

    public getAllSeriesDashboard(): Observable<any> {
        return this.http.get<any>('/api/series/getAllSeriesDashboard');
    }

    public getAllSeries(): Observable<any> {
        return this.http.get<any>('/api/series/getAllSeries');
    }

    public getNbEpisodesBySerie(idSerie: number): Observable<any> {
        return this.http.get<any>('/api/series/' + idSerie + '/getNbEpisodes');
    }

    public getEpisodesSeen(idSerie: number): Observable<any> {
        return this.http.get<any>('/api/series/' + idSerie + '/episodesSeen');
    }

    public getEpisodesNotSeen(idSerie: number): Observable<any> {
        return this.http.get<any>('/api/series/' + idSerie + '/episodesNotSeen');
    }

    public getAllSeriesNb(): Observable<any> {
        return this.http.get<any>('/api/series/getAllSeriesNb');
    }

    public getSerie(id: number): Observable<any> {
        return this.http.get<any>('/api/series/' + id);
    }

    public getNewSeries(): Observable<any> {
        return this.http.get<any>('/api/series/getAllSeriesNews');
    }

    public getTopSeries(): Observable<any> {
        return this.http.get<any>('/api/series/getAllSeriesTops');
    }



// CRUD

    public addRegarder(req: any): Observable<any> {

        return this.http.post<any>('/api/users/' + req.idUser + '/addSerieRegarder/' + req.idSerie, req);
    }

    public removeRegarder(req: any): Observable<any> {

        return this.http.delete<any>('/api/users/' + req.idUser + '/deleteSerieRegarder/' + req.idSerie);
    }

    insertSerie(serie: Serie): Observable<Serie> {
        return this.http.post<Serie>('/api/series/insert', serie);
    }

    deleteSerie(id: number) {
        return this.http.delete('/api/series/delete/' + id);
    }

    updateSerie(serie: Serie): Observable<void> {
        return this.http.put<void>('/api/series/update/' + serie.idSerie, serie);
    }




}
