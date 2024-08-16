import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
   

  todo_data=[{
    TaskName:"Running",
    Completed:false,
  },
  {
    TaskName:"Coding",
    Completed:false,
  },
  {
    TaskName:"Gym",
    Completed:false,
  }
]


deleteTask(i:number){
  this.todo_data.splice(i,1);
  console.log(i);
}

isDone(i:number){
  this.todo_data[i].Completed=!this.todo_data[i].Completed;
  console.log(this.todo_data[i].Completed);
}

onSubmit(form:NgForm){
  console.log(form.controls['TaskVal'].value);
  if(form.controls['TaskVal'].value==""){
    console.log("please fill the task");
    alert("task is mandatory");
  }
  else{
    this.todo_data.push({
      TaskName: form.controls['TaskVal'].value,
      Completed: false
    });
  }
  
}
    
}
