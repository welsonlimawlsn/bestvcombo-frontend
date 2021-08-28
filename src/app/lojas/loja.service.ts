import {Injectable, SkipSelf} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsuarioService} from "../usuario.service";
import {switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LojaService {

  constructor(
    @SkipSelf() private http: HttpClient,
    private usuarioService: UsuarioService
  ) {
  }

  buscaLojaParceiroLogado() {
    return this.usuarioService.getPerfilUsuario().pipe(
      switchMap(perfil => {
        return this.http.get(`http://localhost:9090/parceiros/${perfil.id}/loja`);
      })
    );
  }

  cadastraLoja(loja: any) {
    return this.usuarioService.getPerfilUsuario().pipe(
      switchMap(perfil => {
        loja.codigoParceiro = perfil.id;
        return this.http.post('http://localhost:9090/loja', loja);
      })
    );
  }
}
