import { Component, OnInit } from '@angular/core';
import { SerieService } from '../share/services/serie.service';
import { AuthService } from '../share/services/auth.service';
import { UserService } from '../share/services/user.service';
import { User } from '../share/models/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  public userNb: any;
  public current: User;
  constructor(private router: Router, private authService: AuthService, private userService: UserService) { }

  ngOnInit() {

    this.userService.getCurrent().subscribe(user => {
      this.current = user;

    },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.authService.logout();
            alert('Accès refusé');
            this.router.navigate(['/connexion']);
          }
        }
      });

  }



}
