import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SecuritySericeService} from '../security-serice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private securityService: SecuritySericeService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(formulaire: NgForm) {
    this.securityService.login(formulaire.value).subscribe(
      (data) => {
        localStorage.setItem('token',data['id']);
        const link = [''];
        this.router.navigate(link);
      },
      (erreur) => {
        console.log(erreur);
      }
    );
  }
}
