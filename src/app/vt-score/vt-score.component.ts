import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vt-score',
  templateUrl: './vt-score.component.html',
  styleUrls: ['./vt-score.component.css']
})
export class VtScoreComponent implements OnInit {
  corrects = [];
  total = 0;
  rights = 0;

  constructor() { }

  ngOnInit() {
    const selects = document.querySelectorAll('vt-select');
    this.total = selects.length;
  }

  reCount(name: string, isCorrect: boolean) {
    if (this.corrects[name] === undefined) {
      this.corrects[name] = isCorrect;
      if (isCorrect) {
        this.rights++;
      }
      return;
    }

    if ((this.corrects[name] !== isCorrect)) {
      this.corrects[name] = isCorrect;
      if (isCorrect) {
        this.rights++;
      } else {
        if (this.rights > 0) {
          this.rights--;
        }
      }
    }

  }
}
