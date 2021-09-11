import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RequisicaoService} from "../../requisicao.service";

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http:HttpClient, private requestSevice:RequisicaoService) { }
  novoProduto(produto: any){
    return this.requestSevice.request(this.http.post('http://localhost:9090/produtos', produto))
  }
}
