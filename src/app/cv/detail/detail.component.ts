import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../../model/Personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() personne: Personne;
  constructor() { }

  ngOnInit() {
  }

}
