import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Item } from './models/Items';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartvdb';
  // private itemsCollection: AngularFirestoreCollection<Item>;
  // items: Observable<Item[]>;
  // constructor (private readonly afs: AngularFirestore) {
  //   this.itemsCollection = afs.collection<Item>('tvdb');
  //   this.items = this.itemsCollection.valueChanges();
  // }

}
