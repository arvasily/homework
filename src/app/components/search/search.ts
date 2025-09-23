import { Component } from '@angular/core';
import { Films } from '../../services/films';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  public seachSrting: string = ''

  constructor(private _filmService: Films) {

  }

  public updateValue(event: Event) {
    const target = event.target as HTMLInputElement
    this.seachSrting = target.value

  }

  public updateSearch(event: Event) {
    this._filmService.searchString = this.seachSrting
  }
}
