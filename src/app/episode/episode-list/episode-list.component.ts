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
  nomEpisode: any;
  saison: number;

  constructor(private route: ActivatedRoute, private serieService: SerieService,
    private userService: UserService, private episodeService: EpisodeService) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('idSerie'), 0); // Récupération du paramètre dans l'URL

    this.episodeService.getAllEpisodesBySerie(this.id).subscribe(eps => {
      this.episodes = eps;
    });
    this.getNbEpisodeLeftToSee(this.id);
    this.getEpisodeSeen(this.id);
    this.getEpisodeNotSeen(this.id);
    this.userService.getCurrent().subscribe(user => {
      this.current = user;
    });

  }

  changeVision(event, id: number) { // Gestion du click sur la checkbox
    this.req.idUser = this.idUser;
    this.req.idE = id;
    if (event.target.checked) {
      this.episodeService.addVision(this.req).subscribe(
        res => {

          this.getNbEpisodeLeftToSee(this.id);
        }

      );
    } else {
      this.episodeService.removeVision(this.req).subscribe(
        res => {

          this.getNbEpisodeLeftToSee(this.id);
        }
      );
    }
  }

  getEpisodeSeen(idSerie: number) { // Episode Vus
    this.serieService.getEpisodesSeen(idSerie).subscribe(episodes => {
      this.episodesSeen = episodes;
    });
  }

  getEpisodeNotSeen(idSerie: number) { // episodes non vus
    this.serieService.getEpisodesNotSeen(idSerie).subscribe(episodes => {
      this.episodesNotSeen = episodes;
    });
  }

  getNbEpisodeLeftToSee(idSerie: number) { // episodes à voir en nombres
    this.serieService.getNbEpisodesBySerie(idSerie).subscribe(episodes => {
      this.nbEpisodes = episodes.nbEpisodes;
    });

    this.userService.getNbEpisodesBySerieSeen(idSerie).subscribe(nb => {
      this.nbEpisodesVu = nb.vu;
      this.Mypercent = 100 * this.nbEpisodesVu / this.nbEpisodes;

      this.nbEpisodesToSee = (this.nbEpisodes - this.nbEpisodesVu);
      if (this.nbEpisodesToSee === 0) {
        this.completed = true;
      } else {
        this.completed = false;
      }
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

  showForm() { // Permet de gérer la visibilité du formulaire d'ajout
    if (this.showFormEp === true) {
      this.showFormEp = false;
    } else {
      this.showFormEp = true;

    }
  }

  public addEpisode() { // Ajout

    if (this.nomEpisode === undefined || this.saison === undefined) {
      alert('Veuillez remplir les 2 champs');
    } else {

      const episode: any = {};
      episode.nomEpisode = this.nomEpisode;
      episode.saison = this.saison;
      episode.idSerie = this.id;
      this.episodeService.insertEpisode(episode).subscribe(res => {
        this.getEpisodeSeen(this.id);
        this.getEpisodeNotSeen(this.id);
        this.getNbEpisodeLeftToSee(this.id);

        this.nomEpisode = undefined;
        this.saison = undefined;

      }
      );

    }
  }


  public deleteEpisode(id: number) { // Suppression
    this.episodeService.deleteEpisode(id).subscribe(res => {
      this.getEpisodeSeen(this.id);
      this.getEpisodeNotSeen(this.id);
      this.getNbEpisodeLeftToSee(this.id);
    });

  }

}
