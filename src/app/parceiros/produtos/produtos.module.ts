import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListaProdutosComponent} from './lista-produtos/lista-produtos.component';
import {NovoProdutoDialogComponent} from './novo-produto-dialog/novo-produto-dialog.component';
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatError, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {RouterModule} from "@angular/router";
import {AuthGuard} from "../../auth.guard";


@NgModule({
  declarations: [
    ListaProdutosComponent,
    NovoProdutoDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild([
      {path:'', component:ListaProdutosComponent, canActivate:[AuthGuard], data: {
          roles: ['PAPEL_PARCEIRO']
        }}
    ])

  ],
  exports:[ListaProdutosComponent,NovoProdutoDialogComponent]
})
export class ProdutosModule {
}
