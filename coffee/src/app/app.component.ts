import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private snackBar: MatSnackBar) {}

  updateNetworkStatusUI() {
    if(navigator.onLine){
      (document.querySelector("body")as any).style = "";
    } else {
      (document.querySelector("body")as any).style = "filter: grayscale(1)";
    }
  }

  ngOnInit() {
    this.updateNetworkStatusUI();
    window.addEventListener("online", this.updateNetworkStatusUI);
    window.addEventListener("offline", this.updateNetworkStatusUI);

    this.snackBar.open('You can add this PWA to the Homescreen', '', {duration: 3000});
  }


}
