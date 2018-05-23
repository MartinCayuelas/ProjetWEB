import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SerieService } from '../../../share/services/serie.service';
import { Serie } from '../../../share/models/serie.model';

@Component({
  selector: 'app-serie-update',
  templateUrl: './serie-update.component.html',
  styleUrls: ['./serie-update.component.css']
})
export class SerieUpdateComponent implements OnInit {

  route: any;
  public form: FormGroup;

  public serie: Serie;
  public id: number;

  constructor(private fb: FormBuilder, private serieService: SerieService) { }

  ngOnInit() {

    this.id = parseInt(this.route.snapshot.paramMap.get('updateSerie/idSerie'), 0); // Récupération du paramètre dans l'URL

    this.serieService.getSerie(this.id).subscribe(series => {
      this.serie = series;
      if (this.serie.imageSerie === null) {
        this.serie.imageSerie = 'fav.png';
      }

    });

    this.form = this.fb.group({
      nbEpisodes: [this.serie.nbEpisodes, Validators.required],
      nbSaisons: [this.serie.nbSaisons, Validators.required],
      description: [this.serie.description, Validators.required],
      imageSerie: [this.serie.imageSerie, Validators.required]

    });
  }


  handleFileSelect(evt) {
    const files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    for (let i = 0, f; f = files[i]; i++) {

      console.log('files: ' + f.name);
      this.form.get('imageSerie').setValue(f.name);
    }
  }


  updateSerie() {
    this.serieService.updateSerie(this.form.value).subscribe();
  }


}
