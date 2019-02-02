import { Component, OnInit } from '@angular/core';
import {StockService} from '../stock-service/stock.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolio:any;
  constructor(private stockService:StockService) { }

  ngOnInit() {
    this.stockService.portfolio().subscribe(res=>this.portfolio = res);
  }

}
