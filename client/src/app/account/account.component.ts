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
  public id: number;
  public userCurrent: User;
  constructor(private route: ActivatedRoute, private authService: AuthService,
    private router: Router, private userService: UserService) { }

  ngOnInit() {
    // this.id = parseInt(this.route.snapshot.paramMap.get('idUser'), 0); // Récupération du paramètre dans l'URL


    this.userService.getCurrent().subscribe(user => {
      this.userCurrent = user;

      console.log('idUser Get Curennt Account:' + this.userCurrent.idUser);

      this.userService.getNbEpisodes(this.userCurrent.idUser).subscribe(stats => {
        this.nbEpisodes = stats.nbVus;
        console.log('nbepisodes:' + this.nbEpisodes);

      });
      this.userService.getNbSeries(this.userCurrent.idUser).subscribe(stats => {
        this.nbSeries = stats.nbVus;
        console.log('nbepisodes:' + this.nbSeries);


      });
    },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.authService.logout();
            this.router.navigate(['/signin']);
          }
        }
      });

  }

}
