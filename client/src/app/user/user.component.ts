import { Component, OnInit } from '@angular/core';
import { User } from '../share/models/user.model';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../share/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users: Observable<User[]>;

  constructor(private userService: UserService) { }


    ngOnInit() {
      this.userService.getAllUsers().subscribe(users => {
        this.users = users;
      });

    }
}
