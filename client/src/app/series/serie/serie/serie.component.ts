import { Component, OnInit } from '@angular/core';
import { Serie } from '../../../share/models/serie.model';
import { SerieService } from '../../../share/services/serie.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
public serie: Serie;

public id: number;

constructor(private route: ActivatedRoute, private serieService: SerieService) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('idSerie'), 0);
    console.log('Id: ' + this.id);



    this.serieService.getSerie(this.id).subscribe(series => {
      this.serie = series;
    });

    if (this.serie.imageSerie === undefined) {
      this.serie.imageSerie = 'fav.png';
    }


  }

}
