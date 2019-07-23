import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../../model/Personne';
import {LoggerService} from '../../services/logger.service';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  personnes: Personne[];
  @Output() sendPerosnne = new EventEmitter();
  constructor(
    private logger: LoggerService,
    private cvService: CvService
  ) { }
  ngOnInit() {
    this.personnes = this.cvService.getPersonnes();
    this.logger.logger('je suis dans le composant list');
  }
  personneSelected(personne) {
    this.sendPerosnne.emit(
      personne
    );
  }
}
