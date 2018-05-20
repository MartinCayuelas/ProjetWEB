import { Component } from '@angular/core';
import { User } from '../user/user';
import { DatePipe} from '@angular/common';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent  {


     model = new User(1, 'Jon' , 'toto' , 'erdg', 'arttr@truc.com', '21/12/12', 'test.png');
    submitted = false;

    onSubmit() { this.submitted = true; }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

}
