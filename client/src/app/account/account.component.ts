import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../share/models/user.model';
import { UserService } from '../share/services/user.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public user: User;

  public nbSeries: Observable<number>;
  public id: number;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('idUser'), 0); // Récupération du paramètre dans l'URL

    this.userService.getUser(this.id).subscribe(users => {
      this.user = users;
      if (this.user.avatar === null) {
        this.user.avatar = 'fav.png';
      }
    });

    this.userService.getNbSeries(this.id).subscribe(stats => {
      this.nbSeries = stats;

      console.log('number' + this.nbSeries);
    });



  }

}
