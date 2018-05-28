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
        console.log('GO USER PlayList =========================');

        return this.http.get<any>('/api/users/' + id + '/playlist');
    }

    public getAllEpisodesBySerieNotSeen(idSerie: number, idUser: number): Observable<any> {
        console.log('La route EpisodesRestants');
        return this.http.get<any>('/api/users/' + idUser + '/EpisodesNotSeenSerie/' + idSerie);
    }

    public getCurrent(): Observable<User> {
        console.log('on va chercher GETCURRENT');
        return this.http.get<User>('/api/users/current');
    }



    public getUser(id: number): Observable<any> {
        console.log('Je fais getBy User ID');
        console.log('idGetUser: ' + id);
        return this.http.get<any>('/api/users/' + id);
    }

    public getNbSeries(id: number): Observable<any> {
        console.log('Je fais getByNbSeries User ID');
        return this.http.get<any>('/api/users/' + id + '/nbSeries');
    }

    public getNbEpisodes(id: number): Observable<any> {
        console.log('Je fais getByNbEpisodes User ID : ' + id);
        return this.http.get<any>('/api/users/' + id + '/nbEpisodes');
    }

}
