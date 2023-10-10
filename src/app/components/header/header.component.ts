import { Component } from '@angular/core';
import { KosarService } from 'src/app/services/kosar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(private ks: KosarService) {
    this.kosarban();
  }

  kosarban():number {
    return this.ks.currentKosar();
  }

}
