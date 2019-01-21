import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Item } from '../models/Items';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  itemDoc: AngularFirestoreDocument<Item>;

  constructor(public afs: AngularFirestore) {

  }

  getItems (startObj, endObj) {
    // this.itemsCollection = this.afs.collection<Item>('tvdb', ref => ref.orderBy('tvname').startAt(startObj).endAt(endObj+'\uf8ff'));
    this.itemsCollection = this.afs.collection<Item>('tvdb', ref => ref.orderBy('tvid'));
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.items;
  }

  lastItems () {
    this.itemsCollection = this.afs.collection<Item>('tvdb', ref => ref.orderBy('tvid','desc').limit(1));
    this.items = this.itemsCollection.valueChanges();
    return this.items;
  }

  addItem(item: Item) {
    this.itemsCollection.add(item);
  }

  deleteItem(item: Item) {
    this.itemDoc = this.afs.doc(`tvdb/${item.id}`);
    this.itemDoc.delete();
  }

  updateItem(item: Item) {
    this.itemDoc = this.afs.doc(`tvdb/${item.id}`);
    this.itemDoc.update(item);
  }

}
