import {Injectable, SkipSelf} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsuarioService} from "../../usuario.service";
import {switchMap} from "rxjs/operators";
import {RequisicaoService} from "../../requisicao.service";
import {environment} from "../../../environments/environment";
import {observable, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LojaService {

  loja!:any;
  constructor(
    @SkipSelf() private http: HttpClient,
    private usuarioService: UsuarioService,
    @SkipSelf() private requisicaoService: RequisicaoService
  ) {
  }

  listaLojas() {
    return this.requisicaoService.request(
      this.http.get<any>(`${environment.backendUrl}/publico/lojas`)
    );
  }

  buscaLojaParceiroLogado() {
    if (this.loja){
      return new Observable<Object>(subscriber => {
        subscriber.next(this.loja);
        subscriber.complete();
      })
    }
    return this.requisicaoService.request(
      this.usuarioService.getPerfilUsuario().pipe(
        switchMap(perfil => {
          return this.http.get(`${environment.backendUrl}/parceiros/${perfil.id}/loja`);
        })
      ), {showErrorDialog: false, showLoading: true}
    );
  }

  cadastraLoja(loja: any) {
    return this.requisicaoService.request(
      this.usuarioService.getPerfilUsuario().pipe(
        switchMap(perfil => {
          loja.codigoParceiro = perfil.id;
          return this.http.post(`${environment.backendUrl}/loja`, loja);
        })
      )
    );
  }
}
