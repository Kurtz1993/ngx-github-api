import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
  SearchComponent,
  RepositoryListComponent,
  RepositoryCardComponent,
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RepositoryListComponent,
    RepositoryCardComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
