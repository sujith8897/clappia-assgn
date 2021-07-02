import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import Employee from 'src/app/models/employees';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  // employee: Employee = new Employee();
  employee: Employee = {
    name:"1",
    salary:0,
    _id:"0",
    address:"0",
    team:"0",
    gender:"0"
  };

  constructor(
    private employeeservice: EmployeeService,
    private router: Router,
    @Inject(DOCUMENT) private _document: Document
  ) { }

  ngOnInit(): void {

  }

  radioChanged(event: any){
      this.employee.gender = event.target.value;

 }


  addemployee(name: string, salary: string, address: string, team: string){
    let newsalary = parseInt(salary);
    this.employee.name = name;
    this.employee.salary = newsalary;
    this.employee.address = address;
    this.employee.team = team;
    
    console.log(typeof this.employee);
    this.employeeservice.addEmployees(this.employee)
        .subscribe((employee) => {alert("Employee Added");this.router.navigate(['/employees'])});
 }



}
