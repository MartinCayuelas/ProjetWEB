import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../share/services/user.service';
import { Observable } from 'rxjs/Observable';
import { Serie } from '../../share/models/serie.model';
import { SerieService } from '../../share/services/serie.service';
import { EpisodeService } from '../../share/services/episode.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../share/models/user.model';

@Component({
  selector: 'app-playlist-user',
  templateUrl: './playlist-user.component.html',
  styleUrls: ['./playlist-user.component.css']
})
export class PlaylistUserComponent implements OnInit {

  public playlist: Observable<Serie>;
  public nbEpisodes: any;
  public show: boolean;

  public user: User;

  public episodes: any;
  public id: number;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService,
    private episodeService: EpisodeService, public serieService: SerieService) { }

  ngOnInit() {
    console.log('Je suis NgInit de Playlist');


    this.id = parseInt(this.route.snapshot.paramMap.get('idUser'), 0); // Récupération du paramètre dans l'URL


    this.userService.getPlayList(this.id).subscribe(playList => {
      this.playlist = playList;

    },

      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/signin']);
          }
        }
      });



    this.show = false;

  }


  getNbEpisodeLeftToSee(idSerie: number, idUser: number) {
    this.userService.getAllEpisodesBySerieNotSeen(idSerie, idUser).subscribe(episodes => {
      this.nbEpisodes = episodes;
    });
  }

  loadEpisodes(idSerie: number) {

    this.episodeService.getAllEpisodesBySerie(idSerie).subscribe(eps => {
      this.episodes = eps;
    });
    this.show = true;
  }
}
