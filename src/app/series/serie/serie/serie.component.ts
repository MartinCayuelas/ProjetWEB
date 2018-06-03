import { Component, OnInit } from '@angular/core';
import { Serie } from '../../../share/models/serie.model';
import { SerieService } from '../../../share/services/serie.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../share/services/auth.service';
import { UserService } from '../../../share/services/user.service';


@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  public serie: Serie;

  public id: number;

  private sub: any;
  public isSeen = false;
  public seen: number;




  public req: any = {};

  constructor(private route: ActivatedRoute, private serieService: SerieService,
    private userService: UserService, public authService: AuthService) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('idSerie'), 0); // Récupération du paramètre dans l'URL

    this.serieService.getSerie(this.id).subscribe(series => {
      this.serie = series;
    });
    this.req.idUser = null;
    this.req.idSerie = this.id;
    this.isSeenSerie();



  }

  addInPlaylist() { // Ajout dans la playlist
    this.serieService.addRegarder(this.req).subscribe();
    this.isSeen = true;
  }

  removeInPlaylist() { // Suppresion d ela serie de la playlist
    this.serieService.removeRegarder(this.req).subscribe();
    this.isSeen = false;
  }

  isSeenSerie(): void { // Gestion de la visibilité du "Vu" dans le HTML
    if (this.authService.loggedIn()) {


      this.userService.isSeenSerieByUser(this.req).subscribe(res => {
        this.seen = res.vu;

        if (this.seen > 0) {
          this.isSeen = true;
        } else {
          this.isSeen = false;
        }
      });
    }
  }





}


