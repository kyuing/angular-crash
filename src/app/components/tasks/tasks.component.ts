import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';  // interface/DB schema
import { TASKS } from '../../mock-tasks'  //import actual documents in the data 

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  // global/public array variable tasks
  // reference the interface Task
  tasks: Task[] = TASKS;

  constructor() { }

  ngOnInit(): void { }

}
