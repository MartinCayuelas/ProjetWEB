import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../share/services/auth.service';
import { UserService } from '../share/services/user.service';
import { AuthGuard } from '../share/auth.guard';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  model: any = {};
  constructor(private authService: AuthService, private authGuard: AuthGuard, private router: Router) { }

  ngOnInit() {
    this.model.login = '';
    this.model.password = '';
  }

  public signIn(): void {
    this.authService.signIn(this.model).subscribe(
      res => {
        localStorage.setItem('token', res.token);

        this.router.navigate(['/accueil']);
      },
      err => {
        alert('Invalid Login or Password');
      }
    );


  }

}
