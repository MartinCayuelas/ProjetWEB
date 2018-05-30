import { Component, OnInit } from '@angular/core';
import { User } from '../share/models/user.model';
import { UserService } from '../share/services/user.service';
import { AuthService } from '../share/services/auth.service';
import { AuthGuard } from '../share/auth.guard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public admin: boolean;
  constructor(public userService: UserService, public authGuard: AuthGuard, public authService: AuthService) { }

  ngOnInit() {

  }

}
