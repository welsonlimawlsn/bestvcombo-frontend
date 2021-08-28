import { Component, OnInit } from '@angular/core';
import {LojaService} from "../../lojas/loja.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-dashboard-parceiro',
  templateUrl: './dashboard-parceiro.component.html',
  styleUrls: ['./dashboard-parceiro.component.scss']
})
export class DashboardParceiroComponent implements OnInit {

  deveCadastrarLoja: boolean = false;
  loja!: any;

  constructor(private lojaService: LojaService) { }

  ngOnInit(): void {
    this.buscaLoja();
  }

  buscaLoja() {
    this.lojaService.buscaLojaParceiroLogado()
      .subscribe(resposta => {
        this.deveCadastrarLoja = false;
        this.loja = resposta;
      }, (error) => {
        if (error.error.codigoInterno === 5) {
          this.deveCadastrarLoja = true;
        }
      });
  }
}
