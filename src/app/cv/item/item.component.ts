import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../../model/Personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() personne: Personne;
  @Output() selectPersonneItem = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.personne);
  }

  selectPersonne() {
    this.selectPersonneItem.emit(
      this.personne
    );
  }

}
