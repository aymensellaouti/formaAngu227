import { Injectable } from '@angular/core';
import {Personne} from '../../model/Personne';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const API_LINK = 'http://localhost:3000/api/personnes';
@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[];
  constructor(
    private http: HttpClient
  ) {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 37, 'as.jpg', 7075595, 'teacher'),
      new Personne(2, 'Ben mohamed', 'ahmed', 32, '', 22558825, 'doctor'),
    ];
  }
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(API_LINK);
  }
  findPersonneById(id) {
    return this.personnes.find(personne => personne.id == id);
  }
  getFakePersonnes() {
    return this.personnes;
  }
  addFakePersonne(personne: Personne) {
    const tableSize = this.personnes.length - 1;
    personne.id = this.personnes[tableSize]['id'] + 1;
    this.personnes.push(personne);
  }
  addPersonne(personne: Personne): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.post(API_LINK, personne, {headers});
  }
}
