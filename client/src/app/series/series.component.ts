import { Component, OnInit } from '@angular/core';
import { Serie } from '../share/models/serie.model';
import { SerieService } from '../share/services/serie.service';
import { HttpClient } from '@angular/common/http';
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


    constructor(private serieService: SerieService) { }


    ngOnInit() {
      this.serieService.getAllSeries().subscribe(series => {
        this.series = series;
      });

    }

}
