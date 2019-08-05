import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent {

  constructor() { }

  @Input() isLoading = true;
  @Input() films: string[];
}
