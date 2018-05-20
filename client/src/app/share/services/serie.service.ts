import { Injectable } from '@angular/core';
import { Serie } from '../models/serie.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap, switchMap } from 'rxjs/operators';


@Injectable()
export class SerieService {

    constructor(private http: HttpClient) {}

    public getAllSeries(): Observable<any> {
        console.log('Je suis dans le service et je faias un getALL');
        return this.http.get<any>('/api/series/getAllSeries');
      }


      public getSerieById(idSerie: string): Observable<any> {
        let params = new HttpParams();
        params = params.append('id', idSerie);

         return this.http.get('/api/series/' + idSerie, {params: params});
        }

    public getSerie(id: number): Observable<any> {
        console.log('Je fais getBy ID');
        console.log('idgetserie: ' + id);
        return this.http.get<any>('/api/series/' + id);
      }


    insertSerie(serie: Serie): Observable<Serie> {
        return this.http.post<Serie>('http://localhost:8000/api/users/', serie.idSerie);
    }

    updateSerie(serie: Serie): Observable<void> {
        return this.http.put<void>('http://localhost:8000/api/users/' + serie.idSerie, serie);
    }

    deleteSerie(id: number) {
        return this.http.delete('http://localhost:8000/api/users/' + id);
    }


}
