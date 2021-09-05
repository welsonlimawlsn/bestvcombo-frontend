import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {LoadingComponent} from "./loading.component";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  count: number = 0;

  constructor(private dialog: MatDialog) {
  }

  _matDialogRef!: MatDialogRef<any>;

  public showLoading() {
    this.count++;

    if (this.count === 1) {
      this._matDialogRef = this.dialog.open(LoadingComponent, {disableClose: true});
    }
  }

  public hideLoading() {
    if (this.count > 0) {
      this.count--;
    }

    if (this.count === 0) {
      this._matDialogRef.close();
    }
  }


}
