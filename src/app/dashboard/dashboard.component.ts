
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  todoList:any;

  constructor(private httpClient:HttpClient) {
    this.todoList=[];
   }

  ngOnInit(): void {
    this.getTodoList();
  }
  getTodoList(){
    this.httpClient.get('https://jsonplaceholder.typicode.com/todos').subscribe((result:any)=>{
      this.todoList=result;
    }
    )
  }
}
