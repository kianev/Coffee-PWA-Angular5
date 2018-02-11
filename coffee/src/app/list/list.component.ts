import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Coffee} from "../logic/Coffee/Coffee";
import {Router} from "@angular/router";
import {GeolocationService} from "../geolocation.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private data: DataService,
              private router: Router,
              private geolocation: GeolocationService) { }

  list: Coffee[];

  ngOnInit() {
   this.data.getList(list => {
     this.list = list;
   })
  }

  onMap(coffee: Coffee) {
    const mapURL = this.geolocation.getMapLink(coffee.location);
    location.href = mapURL;
  }

  onShare(coffee: Coffee) {
    const shareText = `I had this coffee at ${coffee.place} and for me it is a ${coffee.rating} star coffee.`;
    if('share' in navigator){
      navigator["share"]({
        title: coffee.name,
        text: shareText,
        url: window.location.href
      }).then(() => console.log('Shared')).catch(() => {console.log('Error sharing')})
    } else {
      const shareURL = `whatsapp://send?text=${encodeURIComponent(shareText)}`;
      location.href = shareURL
    }
  }

  onDetails(coffee) {
    this.router.navigate(['/coffee', coffee._id])
  }

}
