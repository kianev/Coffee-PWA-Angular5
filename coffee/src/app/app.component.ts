import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.snackBar.open('You can add this PWA to the Homescreen', '', {duration: 3000});
  }
}
