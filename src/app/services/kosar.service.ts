import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KosarService {

  tetelek?: any = []

  constructor() { }

  getAllTetelek() {
    return this.tetelek;
  }

  addTetel(model: any, db: any, color_code: any, storage: any, price: any) {
    const body = {
      model: model,
      db: db,
      color_code: color_code,
      storage: storage,
      price: price
    }
    this.tetelek.push(body);
  }

  currentKosar(): number {
    return this.tetelek.length;
  }

}
