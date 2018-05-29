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

  public nbEpisodes: number;
  public nbEpisodesVu: number;
  public nbEpisodesToSee: number;
  public Mypercent: any;



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
    this.getNbEpisodeLeftToSee(this.id);


  }

  addInPlaylist() {
    this.serieService.addRegarder(this.req).subscribe();
    this.isSeen = true;
    this.getNbEpisodeLeftToSee(this.id);
    console.log('addPlaylist: ' + this.nbEpisodesVu);
  }

  removeInPlaylist() {
    this.serieService.removeRegarder(this.req).subscribe();
    this.isSeen = false;
    this.getNbEpisodeLeftToSee(this.id);
  }

  isSeenSerie(): void {
    this.userService.isSeenSerieByUser(this.req).subscribe(res => {
      this.seen = res.vu;
      console.log('seen? 1 ou 0:' + this.seen);

      if (this.seen > 0) {
        this.isSeen = true;
      } else {
        this.isSeen = false;
      }
    });
  }




  getNbEpisodeLeftToSee(idSerie: number) {
    this.serieService.getNbEpisodesBySerie(idSerie).subscribe(episodes => {
      this.nbEpisodes = episodes.nbEpisodes;
      console.log('nbEpisodes: ' + this.nbEpisodes);
    });

    this.userService.getNbEpisodesBySerieSeen(idSerie).subscribe(nb => {
      this.nbEpisodesVu = nb.vu;
      console.log('nbEpisodesVu: ' + this.nbEpisodesVu);
      this.Mypercent = 100 * this.nbEpisodesVu / this.nbEpisodes;
      console.log('MyPercent: ' + this.Mypercent);


    this.nbEpisodesToSee = this.nbEpisodes - this.nbEpisodesVu;
    console.log('nbEpisodesToSee: ' + this.nbEpisodesToSee);
    });


  }

}


