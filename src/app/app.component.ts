import { VtScoreComponent } from './vt-score/vt-score.component';
import { VtSelectComponent } from './vt-select/vt-select.component';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  protected answers1;
  protected answers2;
  protected answers3;
  protected listAnswers;

  ngOnInit() {
    this.answers1 = [
      { 'value': '19', 'correct': false },
      { 'value': '21', 'correct': true },
      { 'value': '23', 'correct': false }];

    this.answers2 = [
      { 'value': 'apple', 'correct': false },
      { 'value': 'pear', 'correct': true },
      { 'value': 'pineapple', 'correct': false }];

    this.listAnswers = [
      this.answers1,
      this.answers2,
      this.answers3
    ];
  }
}
