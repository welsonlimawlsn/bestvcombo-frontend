import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LojaService} from "../../../shared/sevices/loja.service";
import {ProdutosService} from "../produtos.service";

@Component({
  selector: 'app-novo-produto-dialog',
  templateUrl: './novo-produto-dialog.component.html',
  styleUrls: ['./novo-produto-dialog.component.scss']
})
export class NovoProdutoDialogComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private fb: FormBuilder, private lojaService: LojaService, private produtoService: ProdutosService) {
  }

  ngOnInit(): void {
    this.lojaService.buscaLojaParceiroLogado().subscribe((loja: any) => {
      this.formulario = this.fb.group({
        nome: ["", Validators.required],
        descricao: ["", Validators.required],
        preco: ["", Validators.required],
        codigoLoja: [loja.codigo, Validators.required]
      })
    });

  }

  cadastraProduto() {
    this.produtoService.novoProduto(this.formulario.value).subscribe(produto => console.log(produto));
  }
}
