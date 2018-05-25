import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Serie } from '../share/models/serie.model';
import { SerieService } from '../share/services/serie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public series: Observable<Serie[]>;
  public topSeries: Observable<any>;

  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.serieService.getNewSeries().subscribe(series => {
      this.series = series;

    });

    this.serieService.getTopSeries().subscribe(series => {
      console.log('La route GetAllTop');
      this.topSeries = series;

    });

    console.log('obj:' + this.topSeries);

  }

}
