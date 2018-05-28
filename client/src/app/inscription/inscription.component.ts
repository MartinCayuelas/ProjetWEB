import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { DatePipe } from '@angular/common';
import { UserService } from '../share/services/user.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../share/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {


  valid = false;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  valuesConf = '';

  public errorSignUp = { 'submitted': true, 'message': '' };


  public form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      idUser: [],
      login: ['', Validators.required],
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      inscription: [''],
      avatar: [null],
      role: [0],

    });
  }


  handleFileSelect(evt) {
    const files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    for (let i = 0, f; f = files[i]; i++) {

      console.log('files: ' + f.name);
      this.form.get('avatar').setValue(f.name);
    }
  }
  onSubmit(): void {
    console.log('Je vais appeler le service');
    this.authService.signUp(this.form.value).subscribe(
      res => {

        alert('You are registered!');
        this.router.navigate(['/signin']);
      },
      error => {
        if (error instanceof HttpErrorResponse) {
          this.errorSignUp = error.error;
          this.errorSignUp.message = error.error.message;
          this.errorSignUp.submitted = error.error.submitted;
          this.form = this.fb.group({
            idUser: [],
            login: [this.form.get('login').value, Validators.required],
            prenom: [this.form.get('prenom').value, Validators.required],
            nom: [this.form.get('nom').value, Validators.required],
            password: ['', Validators.required],
            email: [this.form.get('email').value, [Validators.required, Validators.pattern(this.emailPattern)]],
            inscription: [ this.form.get('avatar').value],
            avatar: [null],
            role: [0],

          });

          this.valuesConf = null;
        }
      });
  }



  onKey(event: any) {
    this.valuesConf = '';
    this.valuesConf += event.target.value;
  }

  clearMessage() {
    this.errorSignUp.submitted = true;
  }

}
