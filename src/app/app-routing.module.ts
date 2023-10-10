import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhonesComponent } from './components/phones/phones.component';
import { EditComponent } from './components/edit/edit.component';
import { BasketComponent } from './components/basket/basket.component';
import { NopageComponent } from './components/nopage/nopage.component';

const routes: Routes = [
  {path: "telefonok", component: PhonesComponent},
  {path: "szerkesztes", component: EditComponent},
  {path: "kosar", component: BasketComponent},
  {path: "error", component: NopageComponent},
  {path: "**", redirectTo:"error"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
