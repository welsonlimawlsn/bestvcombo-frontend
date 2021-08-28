import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {KeycloakService} from "keycloak-angular";
import {flatMap} from "rxjs/internal/operators";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private keycloakService: KeycloakService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return new Observable(o => {
      this.keycloakService.isLoggedIn().then(isLoggedIn => {
        if (!isLoggedIn) {
          next.handle(req).subscribe(result => o.next(result), error => o.error(error), () => o.complete());
        } else {
          this.keycloakService.addTokenToHeader(req.headers)
            .pipe(flatMap((h: HttpHeaders) => next.handle(req.clone({headers: h}))))
            .subscribe(result => o.next(result), error => o.error(error), () => o.complete())
        }
      });
    });
  }

}
