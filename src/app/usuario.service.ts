import {Injectable} from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {Observable} from "rxjs";
import {KeycloakProfile} from "keycloak-js";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private keycloakService: KeycloakService) {
  }

  getPerfilUsuario(): Observable<KeycloakProfile> {
    return new Observable(observer => {
      this.keycloakService.loadUserProfile().then(usuario => {
        observer.next(usuario);
        observer.complete();
      }).catch(reason => {
        observer.error(reason);
        observer.complete();
      })
    });
  }

  hasUsuarioLogado() {
    return new Observable(o => {
      this.keycloakService.isLoggedIn().then(isLogged => {
        o.next(isLogged);
        o.complete();
      }).catch(error => {
        o.error(error);
        o.complete();
      });
    });
  }

  addTokenToHeader(headers?: HttpHeaders) {
    return this.keycloakService.addTokenToHeader(headers);
  }
}
