import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {selectPortfolio} from './app.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store$:Store<any>)
  {

  }
  portfolio$ = this.store$.select(selectPortfolio);

}
