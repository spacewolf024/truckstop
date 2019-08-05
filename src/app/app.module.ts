import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AppService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
