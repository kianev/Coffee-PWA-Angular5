import { Injectable } from '@angular/core';
import {Coffee} from "./logic/Coffee/Coffee";
import {PlaceLocation} from "./logic/Coffee/PlaceLocation";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class DataService {
  public endpoint = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  get(coffeeId: string, callback) {
    this.httpClient.get(`${this.endpoint}/coffees/${coffeeId}`)
      .subscribe(response => {
        callback(response);
      })
  }

  getList(callback) {
     /*  const list = [
          new Coffee('Espresso', 'Starbucks', new PlaceLocation('Kertnenstrasse 30', 'Vienna')),
          new Coffee('Kleiner Brauner', 'Europa Cafe', new PlaceLocation('Graben 3', 'Vienna'))
        ];
     callback(list);*/
   this.httpClient.get(`${this.endpoint}/coffees`)
     .subscribe(response => {
       callback(response);
     });
  }

  save(coffee, callback) {
   if(coffee._id){
     this.httpClient.put(`${this.endpoint}/coffees/${coffee._id}`, coffee)
       .subscribe(response => {
         callback(true);
       })
   } else {
     this.httpClient.post(`${this.endpoint}/coffees`, coffee)
       .subscribe(response => {
         callback(true);
       })
   }
  }
}
