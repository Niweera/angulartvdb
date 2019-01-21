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
    this.itemService.getItems(this.searchValue, this.searchValue).subscribe(items => {
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

  filterNames() {
    // Get value of input
    // let filterValue = document.getElementById('filterInput').value.toUpperCase();
    const filterValue = (<HTMLInputElement>document.getElementById('filterInput')).value.toUpperCase();
    // Get names ul
    const ul = document.getElementById('test');
    // Get lis from ul
    const li = ul.querySelectorAll('td.collection-item1');
    const li0 = ul.querySelectorAll('td.collection-item0');
    const li2 = ul.querySelectorAll('td.collection-item2');
    const li3 = ul.querySelectorAll('td.collection-item3');
    const li4 = ul.querySelectorAll('td.collection-item4');
    const li5 = ul.querySelectorAll('td.collection-item5');

    // Loop through collection-item lis
    for (let i = 0; i < li.length; i++) {
      const a = li[i].getElementsByTagName('a')[0];
      // If matched
      if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
        (<HTMLElement>li[i]).style.display = '';
        (<HTMLElement>li0[i]).style.display = '';
        (<HTMLElement>li2[i]).style.display = '';
        (<HTMLElement>li3[i]).style.display = '';
        (<HTMLElement>li4[i]).style.display = '';
        (<HTMLElement>li5[i]).style.display = '';
        // li[i].style.display = '';
        // li0[i].style.display = '';
        // li2[i].style.display = '';
        // li3[i].style.display = '';
        // li4[i].style.display = '';
        // li5[i].style.display = '';
      } else {
        (<HTMLElement>li[i]).style.display = 'none';
        (<HTMLElement>li0[i]).style.display = 'none';
        (<HTMLElement>li2[i]).style.display = 'none';
        (<HTMLElement>li3[i]).style.display = 'none';
        (<HTMLElement>li4[i]).style.display = 'none';
        (<HTMLElement>li5[i]).style.display = 'none';
        // li[i].style.display = 'none';
        // li0[i].style.display = 'none';
        // li2[i].style.display = 'none';
        // li3[i].style.display = 'none';
        // li4[i].style.display = 'none';
        // li5[i].style.display = 'none';
      }
    }
  }
}



