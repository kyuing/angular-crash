import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  //https://rxjs.dev/guide/subject
  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask; //set to opposite (show or !show)
    this.subject.next(this.showAddTask);  //keep re-initializing subject's next value to current value of showAddTask 
  }

  //on toggle, return this.subject
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
