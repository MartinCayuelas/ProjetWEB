import { Component, OnInit } from '@angular/core';
import { Serie } from '../../share/models/serie.model';
import { SerieService } from '../../share/services/serie.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-serie-form',
  templateUrl: './serie-form.component.html',
  styleUrls: ['./serie-form.component.css']
})
export class SerieFormComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder, private route: Router, private serieService: SerieService) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      idSerie: [null],
      titre: ['', Validators.required],
      dateSortie: ['', Validators.required],
      nomRealisateur: ['', Validators.required],
      prenomRealisateur: ['', Validators.required],
      nbEpisodes: ['', Validators.required],
      nbSaisons: ['', Validators.required],
      description: ['', Validators.required],
      imageSerie: [null, Validators.required]

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

  createSerie(): void {
    this.serieService.insertSerie(this.form.value).subscribe();
    this.route.navigate(['/dashboard']);
  }
}
