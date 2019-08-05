import { AppService } from './app.service';
import { Component, ViewEncapsulation, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [AppService]
})

export class AppComponent {
  constructor(private appService: AppService) { }

  selected: string;
  films: string[];
  @Output() details: any;
  error: boolean;
  loading = false;

  characters = [
      {
        name: 'Luke Skywalker',
        url: 'https://swapi.co/api/people/1/'
      },
      {
        name: 'C-3PO',
        url: 'https://swapi.co/api/people/2/'
      },
      {
        name: 'Leia Organa',
        url: 'https://swapi.co/api/people/unknown/'
      },
      {
        name: 'R2-D2',
        url: 'https://swapi.co/api/people/3/'
      }
  ];

  OnInit() {
    this.selected = '';
    this.error = false;
  }

  characterSelect(index) {
    this.resetData();
    this.loading = true;
    this.selected = this.characters[index].name;
    this.appService.getCharacterData(this.characters[index].url)
      .subscribe(data => this.callFilms(data), err => this.errorHandler(err));
  }

  resetData() {
    this.error = false;
    this.details = [];
    this.selected = '';
  }

  callFilms(data) {
    this.loading = false;
    this.films = data.films;
    this.appService.getFilmData(this.films)
      .subscribe(res => this.filmHandler(res), err => this.errorHandler(err));
  }

  filmHandler(data) {
    this.details = data;
  }

  errorHandler(data) {
    this.details = [];
    this.loading = false;
    this.error = true;
  }

}
