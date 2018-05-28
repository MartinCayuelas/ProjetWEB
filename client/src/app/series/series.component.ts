import { Component, OnInit } from '@angular/core';
import { Serie } from '../share/models/serie.model';
import { SerieService } from '../share/services/serie.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})

export class SeriesComponent implements OnInit {
  public series: Observable<Serie[]>;
  public serie: any;

  constructor(private router: Router, private serieService: SerieService) { }


  ngOnInit() {

    this.getAllSeriesDashboard();
    this.getNbSeries();

  }

  public getNbSeries() {
    this.serieService.getAllSeriesNb().subscribe(stats => {
      this.serie = stats;
    },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/signin']);
          }
        }
      });
  }



  deleteSerie(id: number) {
    this.serieService.deleteSerie(id).subscribe();

    this.getAllSeriesDashboard();
    this.getNbSeries();
  }

  getAllSeriesDashboard() {
    this.serieService.getAllSeriesDashboard().subscribe(series => {
      this.series = series;
    }
      ,
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/signin']);
          }
        }

      });

  }


}
