import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../share/services/user.service';
import { Observable } from 'rxjs/Observable';
import { Serie } from '../../share/models/serie.model';
import { SerieService } from '../../share/services/serie.service';
import { EpisodeService } from '../../share/services/episode.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../share/models/user.model';
import { AuthService } from '../../share/services/auth.service';

@Component({
  selector: 'app-playlist-user',
  templateUrl: './playlist-user.component.html',
  styleUrls: ['./playlist-user.component.css']
})
export class PlaylistUserComponent implements OnInit {

  public playlist: Observable<Serie>;

  public show: boolean;

  public user: User;

  public episodes: any;
  public id: number;

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService, private userService: UserService,
    private episodeService: EpisodeService, public serieService: SerieService) { }

  ngOnInit() {

    this.id = parseInt(this.route.snapshot.paramMap.get('idUser'), 0); // Récupération du paramètre dans l'URL


    this.userService.getPlayList(this.id).subscribe(playList => {
      this.playlist = playList;

    },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.authService.logout();
            alert('Accès refusé');
            this.router.navigate(['/connexion']);
          }
        }
      });


    this.show = false;

  }


  loadEpisodes(idSerie: number) { // Chargement des épisodes

    this.episodeService.getAllEpisodesBySerie(idSerie).subscribe(eps => {
      this.episodes = eps;
    });
    this.show = true;
  }
}
