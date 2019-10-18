import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  isShow = true;

  message = this.isShow;

  constructor() { }

  ngOnInit() {
  }

  showData() {
    this.isShow = false;
  }

  hideData() {
    this.isShow = true;
  }

}
