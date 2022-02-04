import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';  // interface/DB schema
// import { TASKS } from '../../mock-tasks'  //import actual documents in the data 

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  //declare and init the array task 
  tasks: Task[] = [];

  //private constructor where instantiates obj of the class TaskService 
  constructor(private taskService: TaskService) { }

  ngOnInit(): void { 
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  //filter the deleted task out of UI
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(
      () => (this.tasks = this.tasks.filter(
        (t) => t.id !== task.id
      )
    ));
  }

  toggleReminder(task: Task) {
    //just change current value to the opposite.
    task.reminder = !task.reminder;
    // console.log(task.reminder);
    this.taskService.updateTaskReminder(task).subscribe();
  }

  //POST
  addTask(task: Task) {
    //console.log(task);
    this.taskService.addTask(task).subscribe((tasks) => (this.tasks.push(task)));
  }

}
