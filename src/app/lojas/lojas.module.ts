import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LojaService} from "./loja.service";
import {HttpClientModule} from "@angular/common/http";
import { CadastroLojaComponent } from './cadastro-loja/cadastro-loja.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    CadastroLojaComponent
  ],
    imports: [
        CommonModule,
        HttpClientModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        SharedModule
    ],
  exports: [
    CadastroLojaComponent
  ],
  providers: [LojaService]
})
export class LojasModule {
}
