import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

import { User } from '../models/user.model';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    public getAllUsers(): Observable<any> {
        return this.http.get<any>('/api/users/getAllUsers');
    }


    public getAllUsersNb(): Observable<any> {
        return this.http.get<any>('/api/users/getAllUsersNb');
    }



    public getPlayList(id: number): Observable<any> {

        return this.http.get<any>('/api/users/' + id + '/playlist');
    }



    public isSeenSerieByUser(req): Observable<any> {
        return this.http.get<any>('/api/users/' + req.idUser + '/serieSeen/' + req.idSerie);
    }


    public getNbEpisodesBySerieSeen(idSerie: number): Observable<any> {
        return this.http.get<any>('/api/users/serie/' + idSerie + '/getNbEpisodesSeen/');
    }

    public getCurrent(): Observable<User> {
        return this.http.get<User>('/api/users/current');
    }


    public getRole(): Observable<any> {
        return this.http.get<any>('/api/users/role');
    }


    public getUser(id: number): Observable<any> {
        return this.http.get<any>('/api/users/' + id);
    }

    public getNbSeries(id: number): Observable<any> {
        return this.http.get<any>('/api/users/' + id + '/nbSeries');
    }

    public getNbEpisodes(id: number): Observable<any> {
        return this.http.get<any>('/api/users/' + id + '/nbEpisodes');
    }

    public deleteUser(id: number) {
        return this.http.delete('/api/users/delete/' + id);

    }
}
