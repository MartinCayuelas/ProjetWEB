import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Serie } from '../share/models/serie.model';
import { SerieService } from '../share/services/serie.service';
import { User } from '../share/models/user.model';
import { UserService } from '../share/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public series: Observable<Serie[]>;
  public topSeries: Observable<any>;
  public user: User;

  constructor(private serieService: SerieService, private userService: UserService) { }

  ngOnInit() {
    this.serieService.getNewSeries().subscribe(series => {
      this.series = series;

    });

    this.serieService.getTopSeries().subscribe(series => {
      this.topSeries = series;

    });

  }

  getCurrent() {
    this.userService.getCurrent().subscribe(user => {
      this.user = user;
    });

  }

}
