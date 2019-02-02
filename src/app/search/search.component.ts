import { Component, OnInit } from '@angular/core';
import {StockService} from '../stock-service/stock.service';
import {FormControl} from '@angular/forms';
import {StockModalComponent} from '../stock-modal/stock-modal.component';
import {MatDialog, MatOptionSelectionChange} from '@angular/material';

export interface Stock{
  symbol: string;
  name: string,
  currentPrice:number,
  quantity:number
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  searchResult:any[];
  myControl = new FormControl();

  pickedStock:any;


  constructor(private stockService:StockService,public dialog: MatDialog) { }

  ngOnInit() {
  }


  keySearch(event:any){
    if(event.code== "ArrowDown" ||  event.code== "ArrowUp")
      return;

    if (this.isLetter(event.target.value) ||  event.code == 'Backspace')
      this.search(event.target.value)
  }

  private isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

  search(text: string)
  {
    this.stockService.search(text).subscribe((res:any)=>{
      console.log('search result '+ JSON.stringify(res));
      if(res && res.stocks)
      {
        this.searchResult = res.stocks;
      }
    })
  }

  onEnter(event:MatOptionSelectionChange)
  {
    let stock= this.searchResult.find(sel=>sel.name==event.source.value);
    this.openDialog(stock as Stock);

  }

  openDialog(stock:Stock): void {

    const dialogRef = this.dialog.open(StockModalComponent, {
      width: '250px',
      data: {symbol:stock.symbol, name:stock.name, currentPrice: stock.currentPrice, quantity:stock.quantity}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.pickedStock = result;
    });
  }

}
