import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PgInicialComponent } from './pg-inicial/pg-inicial.component';
import { UniversoHpComponent } from './universo-hp/universo-hp.component';
import { OutrosHpComponent } from './outros-hp/outros-hp.component';
import { SobreAutoraComponent } from './sobre-autora/sobre-autora.component';

@NgModule({
  declarations: [
    AppComponent,
    PgInicialComponent,
    UniversoHpComponent,
    OutrosHpComponent,
    SobreAutoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
