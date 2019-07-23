import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../../model/Personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  personnes: Personne[];
  @Output() sendPerosnne = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 37, 'as.jpg', 7075595, 'teacher'),
      new Personne(2, 'Ben mohamed', 'ahmed', 32, 'as.jpg', 22558825, 'doctor'),
    ];
  }

  personneSelected(personne) {
    this.sendPerosnne.emit(
      personne
    );
  }
}
