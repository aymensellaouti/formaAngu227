import { Injectable } from '@angular/core';
import {Personne} from '../../model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 37, 'as.jpg', 7075595, 'teacher'),
      new Personne(2, 'Ben mohamed', 'ahmed', 32, '', 22558825, 'doctor'),
    ];
  }
  getPersonnes() {
    return this.personnes;
  }
}
