import { Action } from '@ngrx/store';

export enum ActionTypes {
  GetPotfolio = '[App Component] GetPotfolio',
  LoadPotfolio = '[Effects] LoadPotfolio',
}

export class GetPotfolio implements Action {
  readonly type = ActionTypes.GetPotfolio;
}

export class LoadPotfolio implements Action {
  readonly type = ActionTypes.LoadPotfolio;

  constructor(public payload: any) { }
}
