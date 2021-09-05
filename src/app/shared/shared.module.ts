import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoComponent} from './logo/logo.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {CnpjValidatorDirective} from './cnpj-validator.directive';
import { MascaraDirective } from './mascara.directive';
import { CpfValidatorDirective } from './cpf-validator.directive';
import { ErroDialogComponent } from './erro-dialog/erro-dialog.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    LogoComponent,
    CnpjValidatorDirective,
    MascaraDirective,
    CpfValidatorDirective,
    ErroDialogComponent
  ],
  exports: [
    LogoComponent,
    MascaraDirective
  ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatButtonModule,
        MatDialogModule
    ]
})
export class SharedModule {
}
