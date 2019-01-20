import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { ItemService} from '../../services/item.service';
import { Item } from '../../models/items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  editState: boolean = false;
  insertState: boolean = false;
  itemToEdit: Item;
  itemToInsert: Item;
  searchValue: string = '';
  item: Item = {
    tvid: null,
    tvname: '',
    showtype: '',
    link: '',
    pid: '',
    tvfrom: '',
    tvto: ''
  }


  constructor(public itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems(this.searchValue,this.searchValue).subscribe(items => {
      this.items = items;
    });
    console.log(this.searchValue);
  }

  deleteItem(event, item: Item) {
    this.clearState();
    this.itemService.deleteItem(item);
  }

  editItem(event, item: Item) {
    this.editState = true;
    this.itemToEdit = item;
  }

  insertItem(event, item: Item) {
    this.insertState = true;
    this.itemToInsert = item;
  }

  updateItem(item: Item) {
    if (item.tvid != null && item.tvname !== '' && item.showtype !== '' && item.link !== '' && item.pid !== '' && item.tvfrom !== '' && item.tvto !== '') {
    this.itemService.updateItem(item);
    this.clearState();
    }
  }

  clearState() {
    this.editState = false;
    this.insertState = false;
    this.itemToEdit = null;
  }

}


