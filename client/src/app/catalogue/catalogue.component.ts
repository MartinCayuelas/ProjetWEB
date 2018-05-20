import { Component, OnInit} from '@angular/core';

import { Serie } from '../share/models/serie.model';
import { SerieService } from '../share/services/serie.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  public series: Observable<Serie[]>;
  /*series = [
  new Serie(1, 'Game of Thrones' , 'GOT.jpg' , 'Meilleure series ever' , '23/12/09' ),
      new Serie(2, 'Vikings' , 'vikings.jpg' , 'I\'m Raagnnaaaar' , '12/04/13' ),
      new Serie(3, 'Arrow' , 'arrow.jpg' , 'You fell this city' , '06/11/12' ),
      new Serie(4, 'The Walking DEAD' , 'TWD.jpg' , 'Kill them all' , '23/04/12' ),

  ];
*/
constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.serieService.getAllSeries().subscribe(series => {
      this.series = series;
    });
  }

}
