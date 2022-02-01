//structure for every component
import { Component } from '@angular/core';

//decoration
@Component({
  selector: 'app-root', //html tag. embedded to <app-root></app-root> in index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title: string = 'Task Tracker';
  // title = 'angular-crash';
}