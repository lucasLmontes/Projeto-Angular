import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PgInicialComponent } from './pg-inicial/pg-inicial.component';
import { UniversoHpComponent } from './universo-hp/universo-hp.component';
import { OutrosHpComponent } from './outros-hp/outros-hp.component';
import { SobreAutoraComponent } from './sobre-autora/sobre-autora.component';

const routes: Routes = [
  {path: '', component: PgInicialComponent},
  {path: 'universo-hp', component: UniversoHpComponent},
  {path: 'outros-hp', component: OutrosHpComponent},
  {path: 'sobre-autora', component: SobreAutoraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
