import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task Tracker';
  showAddTask: boolean;
  subscription: Subscription;
  
  //call this.uiService.onToggle()
  //and then assign value this.uiService.onToggle() to this.showAddTask
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(
      (value) => (this.showAddTask = value)
    );
  }

  //lifecycle method
  ngOnInit(): void {
  }

  toggleAddTask() {
    console.log('btn cliked');
    this.uiService.toggleAddTask();
  }

}
