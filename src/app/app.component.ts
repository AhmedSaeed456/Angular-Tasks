import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day2Tasks';
  parentMsg = "hello"
  dataFromChild: {}[]=[];
  getData(e: any) {
    if (e.name.length > 0 || (e.age >= 20 || e.age <= 40)) {
      this.dataFromChild.push(e);
      console.log(e);
    }
    else {
      alert("invalid inputs");
    }
  }
}
