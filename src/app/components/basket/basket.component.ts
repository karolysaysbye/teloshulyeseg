import { Component } from '@angular/core';
import { KosarService } from 'src/app/services/kosar.service';
import { BaseService } from 'src/app/services/base.service';
import { map } from "rxjs/operators";
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {

  tetelek: any;
  colors: any;
  nev?: string;
  cim?: string;
  

  constructor(private ks: KosarService, private bs: BaseService, private router: Router) {
    this.tetelek = this.ks.getAllTetelek();
    console.log(this.tetelek);

    this.bs.getAllColors().snapshotChanges().pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(data => {
      this.colors = data;
    })
    this.currentKosar();
  }

  getColor(key: string) {
    return this.colors?.find((k: any) => {
      return k.key == key;
    })
  }

  deleteOne(tetel: any) {
    this.tetelek = this.tetelek.filter((e: any) => e != tetel);
    this.ks.getAllTetelek();
    console.log(tetel, 'sikeresen törölve a kosárból!');
    console.log(this.tetelek)
  }

  deleteAll() {
    this.tetelek = [];
  }

  addFinalOrder(tetelek: any) {
    this.tetelek.cim = this.cim;
    this.tetelek.nev = this.nev;
    this.tetelek.datum = String(Date());
    this.bs.submitOrder(tetelek);
    console.log('Sikeresen leadtad a rendelést!')
  }

  finalPrice(tetelek: any) {
    let total = 0;
    for (const tetel of tetelek) {
      total += tetel.db * tetel.price;
    }

    return total;
  }

  currentKosar(): number {
    return this.tetelek.length;
  }

  goBack() {
    this.router.navigate(['/telefonok']);
  }


}
