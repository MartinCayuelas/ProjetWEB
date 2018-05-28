import { Component, OnInit } from '@angular/core';

import { AuthService } from './share/services/auth.service';
import { User } from './share/models/user.model';
import { UserService } from './share/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  userCurrent: User;
  constructor(public userService: UserService, public authService: AuthService) { }

  ngOnInit() {

  }

  getCurrent() {
    this.userService.getCurrent().subscribe(user => {
      this.userCurrent = user;
    });

  }

}
