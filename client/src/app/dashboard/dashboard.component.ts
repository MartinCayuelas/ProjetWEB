import { Component, OnInit } from '@angular/core';
import { SerieService } from '../share/services/serie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  public userNb: any;
  constructor(private serieService: SerieService) { }

  ngOnInit() {


  }



}
