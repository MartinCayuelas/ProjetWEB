import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import {  RouterModule, Routes, Route } from '@angular/router';
import { SeriesComponent } from './series/series.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';

// Services

import { UserService } from './share/services/user.service';
import { SerieService } from './share/services/serie.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SerieComponent } from './series/serie/serie/serie.component';

const appRoutes: Routes = [
    { path: 'accueil', component: HomeComponent },
    { path: 'connexion', component: ConnexionComponent },
    { path: 'inscription', component: InscriptionComponent },
    { path: 'catalogue', component: CatalogueComponent },
    { path: 'series', component: SeriesComponent },
    { path: 'catalogue/:idSerie', component: SerieComponent },
    { path: 'series/:idSerie', component: SerieComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'mon-compte/:id', component: AccountComponent },
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
    SerieComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes)

  ],
  providers: [
      UserService,
      SerieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
