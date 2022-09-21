import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar) { }

  openError(message: string): void {
    this.snackbar.open(message, 'X', {duration: 4000, panelClass: '#ff0000'})
  }

  openSuccess(message: string): void {
    this.snackbar.open(message, 'X', {duration: 4000, panelClass: '#9CECFF'})
  }

  openDefault(message: string): void {
    this.snackbar.open(message, 'X', {duration: 4000})
  }

}
