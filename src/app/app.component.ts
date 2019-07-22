import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDiv = false;
  title = 'aymen';
  showHide() {
    this.showDiv = ! this.showDiv;
  }

  logInput(maVaribale) {
    console.log(maVaribale);
  }
  getSonInfo(data) {
    alert(data);
  }
}
