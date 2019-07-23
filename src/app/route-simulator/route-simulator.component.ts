import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-route-simulator',
  templateUrl: './route-simulator.component.html',
  styleUrls: ['./route-simulator.component.css']
})
export class RouteSimulatorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigate(routePath) {
    const path = [routePath];
    this.router.navigate(path);
  }

}
