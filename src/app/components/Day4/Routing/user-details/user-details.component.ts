import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent {
  id = 0;
  constructor(myActivate: ActivatedRoute) {
    this.id = myActivate.snapshot.params["id"];
    console.log(myActivate.snapshot.params["id"]);
      }
}
