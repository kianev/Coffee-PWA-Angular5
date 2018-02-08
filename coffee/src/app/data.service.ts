import { Injectable } from '@angular/core';
import {Coffee} from "./logic/Coffee/Coffee";
import {PlaceLocation} from "./logic/Coffee/PlaceLocation";

@Injectable()
export class DataService {

  constructor() { }


  getList(callback) {
    const list = [
      new Coffee('Espresso', 'Starbucks', new PlaceLocation('Kertnenstrasse 30', 'Vienna')),
      new Coffee('Kleiner Brauner', 'Europa Cafe', new PlaceLocation('Graben 3', 'Vienna'))
    ];
    callback(list);
  }

  save(coffee, callback) {
    callback(true);
  }
}
