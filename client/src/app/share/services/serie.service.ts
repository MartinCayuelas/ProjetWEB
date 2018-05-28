import { Injectable } from '@angular/core';
import { Serie } from '../models/serie.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap, switchMap } from 'rxjs/operators';


@Injectable()
export class SerieService {

    constructor(private http: HttpClient) { }

    public getAllSeriesDashboard(): Observable<any> {
        console.log('Je suis dans le service et je faias un getALLSerieDashboard');
        return this.http.get<any>('/api/series/getAllSeriesDashboard');
    }

    public getAllSeries(): Observable<any> {
        console.log('Je suis dans le service et je faias un getALLSerie');
        return this.http.get<any>('/api/series/getAllSeries');
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
