import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from './environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { PhonesComponent } from './components/phones/phones.component';
import { BasketComponent } from './components/basket/basket.component';
import { EditComponent } from './components/edit/edit.component';
import { NopageComponent } from './components/nopage/nopage.component';
import { FilterPipe } from './services/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhonesComponent,
    BasketComponent,
    EditComponent,
    NopageComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
