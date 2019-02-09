import { Action } from '@ngrx/store';
import {ActionTypes, LoadPotfolio} from './app.actions';

export const initialState = {
  portfolio:null,
  searchResult: null
};

export function appReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.LoadPotfolio:
      return {...state,portfolio: <LoadPotfolio>action.payload};
    default:
      return state;
  }
}
