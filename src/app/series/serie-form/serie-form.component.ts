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
      imageSerie: ['', Validators.required]

    });
  }


  createSerie(): void {
    if (this.form.valid) {
      this.serieService.insertSerie(this.form.value).subscribe();
      this.route.navigate(['/dashboard']);
    } else {
      alert('Veuillez renseigner tous les champs munis d\'une * ');
    }

  }
}
