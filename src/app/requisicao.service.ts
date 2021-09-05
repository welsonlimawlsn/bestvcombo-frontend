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

  request<T>(observable: Observable<T>): Observable<T> {
    this.loadingService.showLoading();
    return observable.pipe(
      tap(() => this.loadingService.hideLoading()),
      catchError((err, caught) => {
        this.loadingService.hideLoading();
        this.dialog.open(ErroDialogComponent, {
          disableClose: true,
          data: {
            erro: err
          }
        })
        throw err;

        return caught;
      })
    );
  }
}
