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

    public signUp(user: User): Observable<User> {
        return this.http.post<User>('/api/users/signUp', user);
    }

    public getUser(id: number): Observable<any> {
        console.log('Je fais getBy User ID');
        console.log('idGetUser: ' + id);
        return this.http.get<any>('/api/users/' + id);
    }

    public getNbSeries(id: number): Observable<any> {
        console.log('Je fais getByNbSeries User ID');
        console.log('idGetUser: ' + id);
        return this.http.get<any>('/api/users/' + id + '/nbSeries');
    }

}
