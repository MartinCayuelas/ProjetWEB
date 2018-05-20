import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

    getAllUsers(): Observable<any> {
        return this.http.get<any>('/api/users/getAllUsers');
    }



}
