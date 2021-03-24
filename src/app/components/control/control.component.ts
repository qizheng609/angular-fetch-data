import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  isShow: boolean;

  constructor() { }

  ngOnInit() {
    this.isShow = true;
  }

  showOrHide() {
    this.isShow = !this.isShow;
  }

}
