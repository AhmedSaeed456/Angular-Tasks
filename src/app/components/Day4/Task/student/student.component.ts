import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: [
  ]
})
export class StudentComponent {
  students: { name: string, age: string, email: string }[] = [];

  constructor() {
    this.students.push({name: 'ahmed', age: '25', email: 'john@example.com'});
    this.students.push({name: 'ali', age: '25', email: 'john@example.com'});
    this.students.push({name: 'ibrahim', age: '25', email: 'john@example.com'});
    this.students.push({name: 'samir', age: '25', email: 'john@example.com'});
  }

}
