import { Component, OnInit } from '@angular/core';
import {LojaService} from "../../shared/sevices/loja.service";

@Component({
  selector: 'app-lista-lojas',
  templateUrl: './lista-lojas.component.html',
  styleUrls: ['./lista-lojas.component.scss']
})
export class ListaLojasComponent implements OnInit {

  lojas!: any[];

  constructor(private lojaService: LojaService) { }

  ngOnInit(): void {
    this.lojaService.listaLojas().subscribe(resposta => this.lojas = resposta.lojas);
  }

}
