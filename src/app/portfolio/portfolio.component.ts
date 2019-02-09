import {Component, Input, OnInit} from '@angular/core';
import {StockService} from '../stock-service/stock.service';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  @Input()
  portfolio:any;

  constructor(private stockService:StockService) { }

  ngOnInit() {
    this.stockService.portfolio().subscribe(res=>this.portfolio = res);
  }

}
