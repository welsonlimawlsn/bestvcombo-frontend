import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CadastroParceiroComponent} from './cadastro-parceiro/cadastro-parceiro.component';
import {RouterModule, Routes} from "@angular/router";
import {DashboardParceiroComponent} from './dashboard-parceiro/dashboard-parceiro.component';
import {AuthGuard} from "../auth.guard";
import {ListarParceirosComponent} from './listar-parceiros/listar-parceiros.component';
import {ParceiroService} from "./parceiro.service";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {LojasModule} from "./lojas/lojas.module";
import {SharedModule} from "../shared/shared.module";

let routes: Routes = [
  {
    path: '',
    component: DashboardParceiroComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['PAPEL_PARCEIRO']
    }
  },
  {
    path: 'listar',
    component: ListarParceirosComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['PAPEL_ADMINISTRADOR']
    }
  },
  {path: 'cadastro', component: CadastroParceiroComponent},
];

@NgModule({
  declarations: [
    CadastroParceiroComponent,
    DashboardParceiroComponent,
    ListarParceirosComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    LojasModule,
    SharedModule
  ],
  providers: [
    ParceiroService
  ]
})
export class ParceirosModule {
}
