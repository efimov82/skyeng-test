import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vt-words-learn',
  templateUrl: './vt-words-learn.component.html',
  styleUrls: ['./vt-words-learn.component.css']
})
export class VtWordsLearnComponent implements OnInit {
  @Input() data: [0];
  private current: any;
  private i: number = 0;
  constructor() { }

  ngOnInit() {
    this.current = this.data[this.i++];

  }

  keyDown($event) {
    if ($event.code === 'Space') {
      if (this.i > this.data.length-1) {
        this.i = 0;
      }
      this.current = this.data[this.i++];
    }
  }

}
