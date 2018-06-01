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

  public user: any;

  constructor(private userService: UserService) { }


  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });


    this.userService.getAllUsersNb().subscribe(stats => {
      this.user = stats;
    });

  }

  public getNbUsers() {
    this.userService.getAllUsersNb().subscribe(stats => {
      this.user = stats;

    });
  }

  public deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe();

    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });

    this.userService.getAllUsersNb().subscribe(stats => {
      this.user = stats;
    });
  }
}
