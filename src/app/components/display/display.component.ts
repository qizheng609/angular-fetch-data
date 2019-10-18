import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../model/item';
import { GetItemDataService } from 'src/app/services/get-item-data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  @Input() message: any;
  itemDetails = new Array<Item>();
  id: any;
  detail: any;
  isShow = true;
  constructor(private getjasondataservice: GetItemDataService) {
    getjasondataservice.getItemDetail().subscribe(response => {
      this.itemDetails = response.map(item => {
        return new Item(
            item.userId,
            item.id,
            item.title,
            item.body
        );
      });
    });
  }


  ngOnInit() {
  }


  showDetail(itemObj: any) {
    this.isShow = false;
    this.id = itemObj.id;
    this.getjasondataservice.getCommentDetail(this.id).subscribe(data => {
    this.detail = data[0];
    });
  }

  closeModel() {
    this.isShow = true;
  }

}
