import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee-comp',
  templateUrl: './employee-comp.component.html',
  styleUrls: ['./employee-comp.component.css']
})
export class EmployeeCompComponent implements OnInit {

  emp : Employee = new Employee();
  empArray: Array<Employee>=[];

  constructor() { }

  ngOnInit() {
  }

  public add() : void{
    console.log("Clicked on Add");
    console.log(this.emp);
    this.empArray.push(this.emp);
    this.emp=new Employee();
  }

  public viewAll() : void{
    console.log(this.empArray);
  }

  public delete(i: number){
    this.empArray.splice(i,1);
  }

}
