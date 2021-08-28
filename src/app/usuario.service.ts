import {Injectable} from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {Observable} from "rxjs";
import {KeycloakProfile} from "keycloak-js";

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
}
