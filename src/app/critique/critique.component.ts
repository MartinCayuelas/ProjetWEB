import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Critique } from '../share/models/critique.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CritiqueService } from '../share/services/critique.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../share/services/auth.service';

@Component({
  selector: 'app-critique',
  templateUrl: './critique.component.html',
  styleUrls: ['./critique.component.css']
})
export class CritiqueComponent implements OnInit {

  public critiques: Observable<Critique[]>;
  public note: number;
  public commentaire: String;
  public id: number;
  public form: FormGroup;

  constructor(public authService: AuthService, private fb: FormBuilder,
    private route: ActivatedRoute, private router: Router, private critiqueService: CritiqueService) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('idSerie'), 0); // Récupération du paramètre dans l'URL

    this.critiqueService.getCritiques(this.id).subscribe(critiques => {
      this.critiques = critiques;

      this.form = this.fb.group({
        idCommentaire: [null],
        note: [1, Validators.required],
        commentaire: ['', Validators.required],
        idSerie: [this.id],
      });

    });
  }

  onChangeNote(event) {
    this.note = event.target.value;
    this.form.get('note').setValue(this.note);
  }

  onChangeDescription(event) {
    this.commentaire = event.target.value;
    this.form.get('commentaire').setValue(this.commentaire);
  }

  saveCritique(): void {
    this.critiqueService.createCritique(this.form.value).subscribe(res => {
      this.getCritiques();
    }

    );

    this.form.get('note').setValue(1);
    this.form.get('commentaire').setValue(' ');
  }

  getCritiques() {
    this.critiqueService.getCritiques(this.id).subscribe(critiques => {
      this.critiques = critiques;
    });

  }
}
