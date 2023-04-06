import { Component } from '@angular/core';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  name = "ahmed";
  counter = 1;
  source = `assets/imgs/1.jpg`
  timer: any;
  clear() {
    this.name=""
  }

  setSource() {
    this.source = `assets/imgs/${this.counter}.jpg`;
  }
  next() {
    if (this.counter < 6) {
      this.counter++;
    }
    this.setSource();
  }
  prev() {
    if (this.counter > 1) {
      this.counter--;
    }
    this.setSource();
  }

  start() {
    this.timer = setInterval(() => {
      if (this.counter == 6) this.counter = 0;
      this.counter++;
      this.setSource();
    }, 500)
  }

    stop() {
      clearInterval(this.timer);
  }
}
