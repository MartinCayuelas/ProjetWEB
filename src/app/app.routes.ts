import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SeriesComponent } from './series/series.component';
import { CatalogueComponent } from './catalog/catalogue.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { SerieUpdateComponent } from './series/serie-update/serie-update/serie-update.component';
import { EpisodeListComponent } from './episode/episode-list/episode-list.component';
import { PlaylistUserComponent } from './playlist/playlist-user/playlist-user.component';
import { CritiqueComponent } from './critique/critique.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SerieComponent } from './series/serie/serie/serie.component';
import { SerieFormComponent } from './series/serie-form/serie-form.component';
import { AuthGuard } from './share/auth.guard';
import { AdminGuard } from './share/admin.guard';

// Routes de l'application
// Guard servent à restrindre l'accès

export const appRoutes: Routes = [
    { path: 'accueil', component: HomeComponent },
    { path: 'connexion', component: ConnexionComponent },
    { path: 'inscription', component: InscriptionComponent },
    { path: 'catalogue', component: CatalogueComponent },
    { path: 'playlist', component: PlaylistUserComponent, canActivate: [AuthGuard] },
    { path: 'series', component: SeriesComponent },
    { path: 'series/add', component: SerieFormComponent, canActivate: [AdminGuard] },
    { path: 'catalogue/:idSerie', component: SerieComponent },
    { path: 'series/:idSerie', component: SerieComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard] },
    { path: 'dashboard/addSerie', component: SerieFormComponent, canActivate: [AdminGuard] },
    { path: 'dashboard/updateSerie/:idSerie', component: SerieUpdateComponent, canActivate: [AdminGuard] },
    { path: 'compte', component: AccountComponent, canActivate: [AuthGuard] },
    { path: '', component: HomeComponent },
    { path: '*', component: HomeComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: 'playlist/serie/:idSerie', component: SerieComponent, canActivate: [AuthGuard] }
];


