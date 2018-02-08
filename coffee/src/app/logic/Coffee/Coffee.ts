import {PlaceLocation} from "./PlaceLocation";
import {TastingRaiting} from "./TastingRating";

export class Coffee {
  type: string;
  rating: number;
  notes: string;
  tastingRating: TastingRaiting;

  constructor(public  name: string, public  place: string, location: PlaceLocation){}
}
