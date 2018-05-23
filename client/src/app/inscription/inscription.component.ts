import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { DatePipe } from '@angular/common';
import { UserService } from '../share/services/user.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  model = new User(null, '', '', '', '', '', '', '', 0);
  submitted = false;

  valid = false;

  valuesConf = '';

  public form: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      idUser: [],
      login: ['', Validators.required],
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      dateInscription: [''],
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
    this.userService.signUp(this.form.value).subscribe();

    this.submitted = true;

  }

  onKey(event: any) {
    this.valuesConf = '';
    this.valuesConf += event.target.value;

    console.log('valu: ' + this.valuesConf);
    console.log('pwd: ' + this.form.get('password').value);


  }



}
