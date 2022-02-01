import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../Task';  // interface/schema Task
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  // global/public array variable tasks
  // reference the interface Task
  @Input() task: Task; 
  faTimes = faTimes;  //icon X

  constructor() { }

  ngOnInit(): void { }

}
