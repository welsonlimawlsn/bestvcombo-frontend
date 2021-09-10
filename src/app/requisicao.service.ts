import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {LoadingService} from "./loading/loading.service";
import {catchError, tap} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {ErroDialogComponent} from "./shared/erro-dialog/erro-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  constructor(private loadingService: LoadingService, private dialog: MatDialog) {
  }

  request<T>(observable: Observable<T>, options = new RequestOptions()): Observable<T> {
    if (options.showLoading) this.loadingService.showLoading();
    return observable.pipe(
      tap(() => this.loadingService.hideLoading()),
      catchError((err, caught) => {
        if (options.showLoading) this.loadingService.hideLoading();
        if (options.showErrorDialog) {
          this.dialog.open(ErroDialogComponent, {
            disableClose: true,
            data: {
              erro: err
            }
          });
        }
        throw err;

        return caught;
      })
    );
  }
}

export class RequestOptions {
  showErrorDialog: boolean = true;
  showLoading: boolean = true;
}
