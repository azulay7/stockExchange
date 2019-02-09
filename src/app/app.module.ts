import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { StockModalComponent } from './stock-modal/stock-modal.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    StockModalComponent,
    PortfolioComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
  entryComponents:[StockModalComponent],
  exports:[StockModalComponent]
})
export class AppModule { }
