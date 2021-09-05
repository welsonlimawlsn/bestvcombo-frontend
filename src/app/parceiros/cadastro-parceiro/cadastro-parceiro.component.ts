import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ParceiroService} from "../parceiro.service";
import {KeycloakService} from "keycloak-angular";
import {cpfValidator} from "../../shared/cpf-validator.directive";

@Component({
  selector: 'app-cadastro-parceiro',
  templateUrl: './cadastro-parceiro.component.html',
  styleUrls: ['./cadastro-parceiro.component.scss']
})
export class CadastroParceiroComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private parceiroService: ParceiroService,
    private keycloakService: KeycloakService
  ) {
  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      cpf: ['', [Validators.required, cpfValidator]],
      email: ['', [Validators.required, Validators.email]],
      usuario: ['', Validators.required],
      senha: ['', Validators.required],
      endereco: this.fb.group({
        cep: ['', Validators.required],
        numero: ['', Validators.required]
      })
    });
  }

  cadastraParceiro() {
    if (this.formulario.valid) {
      this.parceiroService.cadastraParceiro(this.formulario.value).subscribe(async response => {
        await this.fazerLogin();
      });
    }
  }

  async fazerLogin() {
    await this.keycloakService.login({
      redirectUri: window.location.origin + '/parceiros'
    });
  }
}
