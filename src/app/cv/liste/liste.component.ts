import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../../model/Personne';
import {LoggerService} from '../../services/logger.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  personnes: Personne[];
  @Output() sendPerosnne = new EventEmitter();
  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 37, 'as.jpg', 7075595, 'teacher'),
      new Personne(2, 'Ben mohamed', 'ahmed', 32, '', 22558825, 'doctor'),
    ];
    this.logger.logger('je suis dans le composant list');
  }

  personneSelected(personne) {
    this.sendPerosnne.emit(
      personne
    );
  }
}
