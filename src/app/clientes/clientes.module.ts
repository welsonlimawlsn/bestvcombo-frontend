import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListaLojasComponent} from './lista-lojas/lista-lojas.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {MatCardModule} from "@angular/material/card";


const routes: Routes = [
  {path: '', component: ListaLojasComponent}
];

@NgModule({
  declarations: [
    ListaLojasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatCardModule
  ]
})
export class ClientesModule {
}
