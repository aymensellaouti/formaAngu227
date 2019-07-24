import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {filter, map, max} from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  observable: Observable<any>;
  imageObservable: Observable<string>;
  constructor() {
  }

  ngOnInit() {
    this.observable = new Observable(
      (observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    this.observable.pipe(
      max()
    ).subscribe(
      (val) => {
        console.log(val);
    },
      (erreur) => {
        console.error(erreur);
      },
      );
    this.imageObservable =  new Observable(
      (observer) => {
        const images = ['404.png', 'as.jpg', 'cv.png'];
        let i = images.length - 1;
        setInterval(() => {
          if (i < 0) {
            i = images.length - 1;
          }
          observer.next(images[i--]);
        }, 1000);
      }
    );
  }

}
