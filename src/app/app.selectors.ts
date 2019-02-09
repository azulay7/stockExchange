import { createSelector } from '@ngrx/store';

export interface SearchResult {

}

export interface AppState {
  portfolio:any,
  searchResult: any
}

export const selectPortfolio = (state: AppState) => state.portfolio;

// export const selectFeatureCount = createSelector(
//   selectPortfolio,
//   (state: SearchResult) => state.counter
// );
