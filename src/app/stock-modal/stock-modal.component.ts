import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Stock} from '../search/search.component';


@Component({
  selector: 'app-stock-modal',
  templateUrl: './stock-modal.component.html',
  styleUrls: ['./stock-modal.component.scss']
})
export class StockModalComponent {

  constructor(
    public dialogRef: MatDialogRef<StockModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Stock) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
