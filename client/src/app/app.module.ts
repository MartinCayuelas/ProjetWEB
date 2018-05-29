import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes, Route } from '@angular/router';

// Components
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
// Services

import { UserService } from './share/services/user.service';
import { SerieService } from './share/services/serie.service';
import { EpisodeService } from './share/services/episode.service';
import { CritiqueService } from './share/services/critique.service';
import { AuthService } from './share/services/auth.service';

import { TokenInterceptorService } from './share/services/token-interceptor.service';

import { appRoutes } from './app.routes';
import { AuthGuard } from './share/auth.guard';

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
    PlaylistUserComponent,
    CritiqueComponent,
    NotFoundComponent,
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
    EpisodeService,
    CritiqueService,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
