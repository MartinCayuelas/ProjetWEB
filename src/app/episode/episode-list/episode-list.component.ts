import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Episode } from '../../share/models/episode.model';
import { EpisodeService } from '../../share/services/episode.service';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from '../../share/services/serie.service';
import { UserService } from '../../share/services/user.service';
import { User } from '../../share/models/user.model';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {

  public episodes: Observable<Episode[]>;
  public episodesSeen: Observable<Episode[]>;
  public episodesNotSeen: Observable<Episode[]>;
  public id;
  public idUser;
  public current: User;
  public completed: boolean;

  public nbEpisodes: number;
  public nbEpisodesVu: number;
  public nbEpisodesToSee: number;
  public Mypercent: any;


  public showFormEp = false;

  req: any = {};
  nomEpisode: string;
  saison: number;

  constructor(private route: ActivatedRoute, private serieService: SerieService,
    private userService: UserService, private episodeService: EpisodeService) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('idSerie'), 0); // Récupération du paramètre dans l'URL
    // this.idUser = parseInt(this.route.snapshot.paramMap.get('idUser'), 0);
    console.log('episodes en demande');
    this.episodeService.getAllEpisodesBySerie(this.id).subscribe(eps => {
      this.episodes = eps;
    });
    this.getNbEpisodeLeftToSee(this.id);
    this.getEpisodeSeen(this.id);
    this.getEpisodeNotSeen(this.id);
    this.userService.getCurrent().subscribe(user => {
      this.current = user;
      console.log('current roel: ' + this.current.role);
    });

  }

  changeVision(event, id: number) {
    this.req.idUser = this.idUser;
    this.req.idE = id;
    if (event.target.checked) {
      console.log('idU:' + this.idUser);
      console.log('idE:' + id);

      this.episodeService.addVision(this.req).subscribe(
        res => {

          this.getNbEpisodeLeftToSee(this.id);
        }

      );
    } else {
      console.log('idE:' + this.req.idE);
      this.episodeService.removeVision(this.req).subscribe(
        res => {

          this.getNbEpisodeLeftToSee(this.id);
        }
      );
    }
  }

  getEpisodeSeen(idSerie: number) {
    this.serieService.getEpisodesSeen(idSerie).subscribe(episodes => {
      this.episodesSeen = episodes;
    });
  }

  getEpisodeNotSeen(idSerie: number) {
    this.serieService.getEpisodesNotSeen(idSerie).subscribe(episodes => {
      this.episodesNotSeen = episodes;
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

      this.nbEpisodesToSee = (this.nbEpisodes - this.nbEpisodesVu);
      if (this.nbEpisodesToSee === 0) {
        this.completed = true;
      } else {
        this.completed = false;
      }
      console.log('nbEpisodesToSee: ' + this.nbEpisodesToSee);
    });
  }
  /*

  compareSeen(id: number) {
    this.episodesSeen.forEach(element => {
      if (element.idEpisode === id) {
        return true;
      } else {
        return false;
      }
    });
  }*/

  showForm() {
    if (this.showFormEp === true) {
      this.showFormEp = false;
    } else {
      this.showFormEp = true;

    }
  }

  public addEpisode() {

    const episode: any = {};
    episode.nomEpisode = this.nomEpisode;
    episode.saison = this.saison;
    episode.idSerie = this.id;
    console.log('Name Ep: ' + episode.nomEpisode);
    console.log('saison Ep: ' + episode.saison);
    console.log('idSerie Ep: ' + episode.idSerie);
    this.episodeService.insertEpisode(episode).subscribe(res => {

      this.getEpisodeNotSeen(this.id);
      this.getNbEpisodeLeftToSee(this.id);
    }
    );

  }

}
