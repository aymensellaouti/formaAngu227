import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-testhttp',
  templateUrl: './testhttp.component.html',
  styleUrls: ['./testhttp.component.css']
})
export class TesthttpComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://jsonplaceholder.typicode.com/users').subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

}
