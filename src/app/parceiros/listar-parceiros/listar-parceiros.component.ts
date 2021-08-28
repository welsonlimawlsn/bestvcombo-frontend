import {Component, OnInit} from '@angular/core';
import {ParceiroService} from "../parceiro.service";

@Component({
  selector: 'app-listar-parceiros',
  templateUrl: './listar-parceiros.component.html',
  styleUrls: ['./listar-parceiros.component.scss']
})
export class ListarParceirosComponent implements OnInit {

  parceiros!: any[];

  displayedColumns: string[] = ['codigo', 'nome', 'cpf', 'email'];

  constructor(private parceiroService: ParceiroService) {
  }

  ngOnInit(): void {
    this.parceiroService.listaParceiros().subscribe(response => {
      this.parceiros = (response as any).pessoas;
    });
  }

}
