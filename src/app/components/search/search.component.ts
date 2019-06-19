import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output()
  search = new EventEmitter<string>();

  searchText: string;

  searchUsername() {
    this.search.emit(this.searchText);
  }
}
