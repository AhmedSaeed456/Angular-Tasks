import { Component } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styles: [
  ]
})
export class StudentDetailsComponent {
  id = 0;
  constructor(myActivate: ActivatedRoute) {
    this.id = myActivate.snapshot.params["id"];
    console.log(myActivate.snapshot.params["id"]);
      }
}
