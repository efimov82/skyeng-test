import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vt-select',
  templateUrl: './vt-select.component.html',
  styleUrls: ['./vt-select.component.css']
})
export class VtSelectComponent implements OnInit {
  @Input()
  answers: any;
  @Output()
  changeValue: EventEmitter<boolean> = new EventEmitter<boolean>();
  isCorrect: boolean;

  onChange(value) {
    this.isCorrect = value;
    this.changeValue.emit(this.isCorrect);
  }

  ngOnInit() {

  }

}
