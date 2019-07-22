import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  @Input() defaultValue = 'red';
  couleur;
  // on créer l'emetteur d'evenement
  @Output() sendDefaultValue = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.couleur = this.defaultValue;
  }

  changeColor(color) {
    this.couleur = color;
  }

  sendDataToParent() {
    // on declenche l'evenement avec des données à l'interieur
    this.sendDefaultValue.emit(
      this.defaultValue
    );
  }

}
