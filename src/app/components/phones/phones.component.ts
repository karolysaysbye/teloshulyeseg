import { Component } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { map } from 'rxjs/operators';
import { KosarService } from 'src/app/services/kosar.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent {

  phones: any;
  colors: any;
  searchText: string ="";

  constructor(private bs: BaseService, private ks: KosarService) {
    this.bs.getAllPhones().snapshotChanges().pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(data => {
      this.phones = data;
      console.log(this.phones);
    })
    this.bs.getAllColors().snapshotChanges().pipe(map(changes => changes.map (c => ({key: c.payload.key, ...c.payload.val()})))
    ).subscribe(data => {
      this.colors = data;
    })
  }

  addTetel(model: any, db: any, color_code: any, storage: any, price: any) {
    this.ks.addTetel(model, db, color_code, storage, price);
    console.log("Sikeresen kosárba raktad:", model, db, 'db-ot!')
  }

  getColor(key: string) {
    return this.colors?.find((k: any) => {
      return k.key == key;
    })
  }

}
