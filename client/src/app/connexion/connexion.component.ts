import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../share/services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  model: any = {};
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.model.login = '';
    this.model.password = '';
    // reset login status
    //  this.authService.logout();
  }

  public signIn(): void {

    console.log('Je vais appeler le serviceAuth pour SignIn');
    this.authService.signIn(this.model).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);

        this.router.navigate(['/home']);
      },
      err => {
        alert('Invalid Login or Password');
      }
    );


  }

}
