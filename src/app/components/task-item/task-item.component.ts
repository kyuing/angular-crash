import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;  //icon X

  constructor() { }

  ngOnInit(): void { }

  onDelete(task) {
    // console.log(task);
    this.onDeleteTask.emit(task);
  }

}
