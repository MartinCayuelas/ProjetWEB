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

  constructor(private route: ActivatedRoute, private episodeService: EpisodeService) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('idSerie'), 0); // Récupération du paramètre dans l'URL
    console.log('episodes en demande');
    this.episodeService.getAllEpisodesBySerie(this.id).subscribe(eps => {
      this.episodes = eps;
    });
    console.log('episodes reçu');
  }

}
