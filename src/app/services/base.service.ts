import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';
import { phones } from '../utils/phones';
import { colors } from '../utils/colors';
import { orders } from '../utils/orders';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  refPhones: AngularFireList<phones>;
  refColors: AngularFireList<colors>;
  refOrders: AngularFireList<orders>;

  constructor(private db: AngularFireDatabase) {
    this.refPhones = this.db.list('phones');
    this.refColors = this.db.list('colors');
    this.refOrders = this.db.list('orders');
  }

  getAllPhones() {
    return this.refPhones;
  }

  getAllColors() {
    return this.refColors;
  }

  getAllOrder() {
    return this.refOrders;
  }

  submitOrder(data: any) {
    return this.refOrders.push(data);
  }

  removePhone(key: string) {
    return this.refPhones.remove(key);
  }

  createPhone(data: any) {
    return this.refPhones.push(data);
  }

  editPhoe(data: any, key: any) {
    return this.refPhones.update(data, key);
  }

}
