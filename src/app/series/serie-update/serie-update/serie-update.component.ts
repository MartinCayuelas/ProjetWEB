import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SerieService } from '../../../share/services/serie.service';
import { Serie } from '../../../share/models/serie.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-serie-update',
  templateUrl: './serie-update.component.html',
  styleUrls: ['./serie-update.component.css']
})
export class SerieUpdateComponent implements OnInit {



  public serie: Serie;
  public id: number;

  constructor(private route: ActivatedRoute, private serieService: SerieService) { }

  ngOnInit() {

    this.id = parseInt(this.route.snapshot.paramMap.get('idSerie'), 0); // Récupération du paramètre dans l'URL

    this.serieService.getSerie(this.id).subscribe(series => {
      this.serie = series;
      if (this.serie.imageSerie === null) {
        this.serie.imageSerie = 'fav.png';
      }

      console.log(this.serie.titre);
      console.log(this.serie.imageSerie);
    });
  }


  setNbSaisons(evt) {
    this.serie.nbSaisons = evt.target.value;
  }

  setNbEpisodes(evt) {
    this.serie.nbEpisodes = evt.target.value;
  }
  setDescription(event) {
    this.serie.description = event.target.value;
  }

  setAffiche(event) {
    this.serie.imageSerie = event.target.value;
  }

  updateSerie() {
    this.serieService.updateSerie(this.serie).subscribe();

  }


}
