import { Component, OnInit } from '@angular/core';
import {Personne} from '../../model/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  selectedPersonne : Personne;
  constructor() { }

  ngOnInit() {
  }
  selectPersonne(personne) {
    this.selectedPersonne = personne;
    console.log(this.selectedPersonne);
  }

}
