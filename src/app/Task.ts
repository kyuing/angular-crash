//interface Task as a kind of DB schema that defines the fields of the array task,
// where the sample JSON docs are.
//at mock-tasks.ts
export interface Task {
  id?: number; //optional
  text: string;
  day: string;
  reminder: boolean;
}