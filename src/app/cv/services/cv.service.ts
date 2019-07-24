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
  findPersonneById(id) {
    return this.personnes.find(personne => personne.id == id);
  }
  addPersonne(personne: Personne) {
    const tableSize = this.personnes.length - 1;
    personne.id = this.personnes[tableSize]['id'] + 1;
    this.personnes.push(personne);
  }
}
