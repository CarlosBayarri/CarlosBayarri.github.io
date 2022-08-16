import { Component, OnInit } from '@angular/core';
declare function loadEvents(): any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      loadEvents();
    }, 1000/3);
  }

}
