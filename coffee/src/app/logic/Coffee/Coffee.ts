import {PlaceLocation} from "./PlaceLocation";
import {TastingRaiting} from "./TastingRating";

export class Coffee {
  _id: string;
  type: string;
  rating: number;
  notes: string;
  tastingRating: TastingRaiting;

  constructor(public  name: string = '',
              public  place: string = '',
              public location: PlaceLocation = null){

    this.location = new PlaceLocation();
    this.tastingRating = new TastingRaiting();
  }
}
