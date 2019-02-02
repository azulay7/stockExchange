import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


const BASE_URL =  'http://int.v2x.foresightauto.com/stock-exchange-service';
@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http:HttpClient) {

  }


  search(text:string){
      return this.http.post(BASE_URL+'/market/search',{
        "searchString": text
      });
  }
}
