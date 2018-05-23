import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { RouterModule, Routes, Route } from '@angular/router';
import { SeriesComponent } from './series/series.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { SerieComponent } from './series/serie/serie/serie.component';
import { SerieFormComponent } from './series/serie-form/serie-form.component';

// Services

import { UserService } from './share/services/user.service';
import { SerieService } from './share/services/serie.service';
import { EpisodeService } from './share/services/episode.service';


import { SerieUpdateComponent } from './series/serie-update/serie-update/serie-update.component';
import { EpisodeListComponent } from './episode/episode-list/episode-list.component';
import { PlaylistUserComponent } from './playlist/playlist-user/playlist-user.component';

const appRoutes: Routes = [
  { path: 'accueil', component: HomeComponent },
  { path: 'signin', component: ConnexionComponent },
  { path: 'signup', component: InscriptionComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'series/add', component: SerieFormComponent },
  { path: 'catalogue/:idSerie', component: SerieComponent },
  { path: 'series/:idSerie', component: SerieComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/addSerie', component: SerieFormComponent },
  { path: 'dashboard/updateSerie/:idSerie', component: SerieUpdateComponent },
  { path: 'account/:idUser', component: AccountComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    CatalogueComponent,
    HomeComponent,
    AccountComponent,
    InscriptionComponent,
    ConnexionComponent,
    DashboardComponent,
    UserComponent,
    NavbarComponent,
    SerieComponent,
    SerieFormComponent,
    SerieUpdateComponent,
    EpisodeListComponent,
    PlaylistUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    UserService,
    SerieService,
    EpisodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
