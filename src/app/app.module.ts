import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VtSelectComponent } from './vt-select/vt-select.component';
import { VtScoreComponent } from './vt-score/vt-score.component';
import { VtWordsLearnComponent } from './vt-words-learn/vt-words-learn.component';

@NgModule({
  declarations: [
    AppComponent,
    VtSelectComponent,
    VtScoreComponent,
    VtWordsLearnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
