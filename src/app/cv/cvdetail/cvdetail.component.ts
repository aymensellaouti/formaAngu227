import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CvService} from '../services/cv.service';
import {Personne} from '../../model/Personne';

@Component({
  selector: 'app-cvdetail',
  templateUrl: './cvdetail.component.html',
  styleUrls: ['./cvdetail.component.css']
})
export class CvdetailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService
  ) { }

  personne: Personne;
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (parametres) => {
        this.personne = this.cvService.findPersonneById(parametres['id']);
      }
    );
  }

}
