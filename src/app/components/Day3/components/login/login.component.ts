import { Component, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name="";
  age="";

  msgFromChild = "welcome from child";
  // constructor() {
  //   setTimeout(() => {
  //     this.myEvent.emit(this.msgFromChild);
  //   }, 3000);
  // }



  @Output() myEvent = new EventEmitter();
  Fire(name:string,age:string) {
    if (name.length >= 3 && (+age >= 20 && +age <= 40)) {
      let Info = {
        name,age
      }

      this.myEvent.emit(Info);
      // this.name = "";
      // this.age = "";
    }
    else{
      alert("Invalid Inputs");
    }
  }
  //when we will fire (using emit command)
}
