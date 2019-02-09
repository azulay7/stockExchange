import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';

import {ActionTypes, LoadPotfolio} from './app.actions';
import {StockService} from './stock-service/stock.service';
import { Effect, Actions, ofType } from '@ngrx/effects';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private stockService:StockService) {}

  @Effect({ dispatch: false })
  fetchPortolio$: Observable<Action> = this.actions$
    .ofType(ActionTypes.GetPotfolio)
    .switchMap(() =>
      this.stockService.portfolio()
        .map((portfolio:any) => new LoadPotfolio(portfolio))
    );
}
