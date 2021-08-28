import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LojaService} from "../loja.service";

@Component({
  selector: 'app-cadastro-loja',
  templateUrl: './cadastro-loja.component.html',
  styleUrls: ['./cadastro-loja.component.scss']
})
export class CadastroLojaComponent implements OnInit {

  formulario!: FormGroup;

  @Output()
  onCadastroRealizado: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private lojaService: LojaService
  ) {
  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      cnpj: ['', Validators.required],
      endereco: this.fb.group({
        cep: ['', Validators.required],
        numero: ['', Validators.required]
      })
    });
  }

  cadastraLoja() {
    if (this.formulario.valid) {
      this.lojaService.cadastraLoja(this.formulario.value)
        .subscribe(() => this.onCadastroRealizado.emit());
    }
  }
}
