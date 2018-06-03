import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../share/models/user.model';
import { UserService } from '../share/services/user.service';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../share/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {


  public nbSeries: any;
  public nbEpisodes: any;
  public minutesSeen: any;
  public id: number;
  public userCurrent: User;
  constructor(private route: ActivatedRoute, private authService: AuthService,
    private router: Router, private userService: UserService) { }

  ngOnInit() {

// recupération User courrant
    this.userService.getCurrent().subscribe(user => {
      this.userCurrent = user;

      // Ses episodes et series (en nombres)
      this.userService.getNbEpisodes(this.userCurrent.idUser).subscribe(stats => {
        this.nbEpisodes = stats.nbVus;
        this.minutesSeen = (this.nbEpisodes * 45);

      });
      this.userService.getNbSeries(this.userCurrent.idUser).subscribe(stats => {
        this.nbSeries = stats.nbVus;


      });
    },
      err => { // Si erreur (Token pas bon)
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
