import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  couleur = 'red';
  constructor() { }

  ngOnInit() {
  }

  changeColor(color) {
    this.couleur = color;
  }

}
