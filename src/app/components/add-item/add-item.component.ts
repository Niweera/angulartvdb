import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/items';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  items: Item[];
  item: Item = {
    tvid: null,
    tvname: '',
    showtype: '',
    link: '',
    pid: '',
    tvfrom: '',
    tvto: ''
  }
  lastTvid: number;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.lastItems().subscribe(items => {
      this.items = items;
      this.lastTvid = items[0].tvid;
    });
  }

  onSubmit(){
    if (this.item.tvid != null && this.item.tvname !== '' && this.item.showtype !== '' && this.item.link !== '' && this.item.pid !== '' && this.item.tvfrom !== '' && this.item.tvto !== '') {
      this.itemService.addItem(this.item);
      this.item.tvid = null;
      this.item.tvname = '';
      this.item.showtype = '';
      this.item.link = '';
      this.item.pid = '';
      this.item.tvfrom = '';
      this.item.tvto = '';
    }
  }

}
