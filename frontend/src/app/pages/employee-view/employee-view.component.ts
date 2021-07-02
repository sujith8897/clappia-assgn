import { Component, OnInit } from '@angular/core';
import Employee from 'src/app/models/employees';
import { EmployeeService } from 'src/app/employee.service';
import { WebService } from 'src/app/web.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { discardPeriodicTasks } from '@angular/core/testing';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  employees: Employee[] = [];
  clicks: number = 0;
  page: number = 1;
  constructor(
    private employeeService: EmployeeService,
    private webservice: WebService,
    private router: Router
    // private route: ActivatedRoute,
    // private router: Router  
  ) { }


  ngOnInit(): void {
    this.employeeService.getEmployees("", "")
      .subscribe((employe) => {
        //console.log(employe);
        this.employees = employe;
      });
  }



  deleteEmployee(list: Employee) {
    this.employeeService.deleteEmployees(list._id)
      .subscribe((list) => { this.employees = this.employees.filter(t => t._id != list._id) });
  }



  updatesize(size: string) {

    this.clicks = this.clicks + 1;
    if (this.clicks === 2) {
      console.log(this.clicks);
      // console.log(this.page);
      this.employeeService.getEmployees(this.page.toString(), size)
        .subscribe((employe) => {
          this.employees = employe;
        });
      this.clicks = 0;
    }

  }

  updatepage(size: string, incr: number) {

    this.page = this.page + incr;
    if(this.page===0){
      this.page = 1;
    }
      console.log(this.page);
      this.employeeService.getEmployees(this.page.toString(), size)
        .subscribe((employe) => {
          this.employees = employe;
        });
  }

  searchbtn(name: string){
    console.log(name);
    this.employeeService.searchEmployees(name)
    .subscribe((employe) => {
      //console.log(employe);
      this.employees = employe;
    });
  }

}
