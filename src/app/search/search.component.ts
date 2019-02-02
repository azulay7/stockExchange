import { Component, OnInit } from '@angular/core';
import {StockService} from '../stock-service/stock.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  searchResult:any;
  myControl = new FormControl();


  constructor(private stockService:StockService) { }

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

}
