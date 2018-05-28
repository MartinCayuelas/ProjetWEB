import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Episode } from '../../share/models/episode.model';
import { EpisodeService } from '../../share/services/episode.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {

  public episodes: Observable<Episode[]>;
  public id;
  public idUser;

  req: any = {};

  constructor(private route: ActivatedRoute, private episodeService: EpisodeService) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('idSerie'), 0); // Récupération du paramètre dans l'URL
    this.idUser = parseInt(this.route.snapshot.paramMap.get('idUser'), 0);
    console.log('episodes en demande');
    this.episodeService.getAllEpisodesBySerie(this.id).subscribe(eps => {
      this.episodes = eps;
    });
    console.log('episodes reçu');
  }

  changeVision(event, id: number) {
    this.req.idUser = this.idUser;
    this.req.idE = id;
    if (event.target.checked) {
      console.log('idU:' + this.idUser);
      console.log('idE:' + id);


      this.episodeService.addVision(this.req).subscribe();
    } else {
      this.episodeService.removeVision(this.req).subscribe();
    }
  }

}
