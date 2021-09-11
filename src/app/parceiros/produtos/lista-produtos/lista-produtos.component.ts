import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {NovoProdutoDialogComponent} from "../novo-produto-dialog/novo-produto-dialog.component";

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  novoproduto() {
    this.dialog.open(NovoProdutoDialogComponent);

  }

}
