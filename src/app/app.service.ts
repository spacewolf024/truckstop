import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import {ICharacter, IFilms} from './character';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(public http: HttpClient) { }

  getCharacterData(url): Observable<ICharacter[]> {
    return this.http.get<ICharacter[]>(url);
  }

  getFilmData(films): Observable<IFilms[]> {
    const callArray = [];
    for (const film of films) {
      callArray.push(this.http.get(film));
    }
    return forkJoin(callArray);
  }
}
