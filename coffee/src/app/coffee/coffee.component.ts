import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Coffee} from "../logic/Coffee/Coffee";
import {GeolocationService} from "../geolocation.service";
import {TastingRaiting} from "../logic/Coffee/TastingRating";
import {DataService} from "../data.service";

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit, OnDestroy {
  routingSubscription: any;
  coffee: Coffee;
  tastingEnabled: boolean;
  types = ['Esspresso', 'Double Espresso', 'Ristretto', 'Café Latte', 'Cappuccino'];

  constructor(private route: ActivatedRoute,
              private geoService: GeolocationService,
              private router: Router,
              private dataService: DataService) { }

  ngOnInit() {
    this.coffee = new Coffee();
    this.routingSubscription = this.route.params
      .subscribe(params => {
       if(params['id']){
         this.dataService.get(params['id'], response => {
           this.coffee = response;
           if(this.coffee.tastingRating){
             this.tastingEnabled = true;
           }
         })
       }
    });

    this.geoService.requestLocation(location => {
      if(location) {
        this.coffee.location.latitude = location.latitude;
        this.coffee.location.longitude = location.longitude;
      }
    })
  }

  tastingRatingsChecked(checked: boolean) {
    if(checked) {
      this.coffee.tastingRating = new TastingRaiting()
    } else {
      this.coffee.tastingRating = null;
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }

  save() {
    this.dataService.save(this.coffee, result => {
      if(result) {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}
