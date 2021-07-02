import { Component, OnInit } from '@angular/core';
import Employee from 'src/app/models/employees';
import { EmployeeService } from 'src/app/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  employee: Employee = {
    name: "1",
    salary: 0,
    _id: "0",
    address: "0",
    team: "0",
    gender: "0"
  };

  sample: Employee = {
    name: "1",
    salary: 0,
    _id: "0",
    address: "0",
    team: "0",
    gender: "0"
  };


  private routeSub: Subscription | undefined;
  params: string = "";
  constructor(
    private employeeservice: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      //console.log(params.empid);
      this.params = params.empid;
    });


    this.employeeservice.editEmployees(this.params)
      .subscribe((employe) => {
        this.employee = employe[0];
        console.log(this.employee);
      });

  }


  radioChanged(event: any) {
    this.employee.gender = event.target.value;
  }

  editEmployee(name: string, salary: string, address: string, team: string) {
    //console.log(this.params,this.employee._id);
    //checking if id is present in database to edit
    if (this.params != this.employee._id) {
      alert("No employee found with that id");
      this.router.navigate(['/']);
    }

    let newsalary = parseInt(salary);
    this.employee.name = name;
    this.employee.salary = newsalary;
    this.employee.address = address;
    this.employee.team = team;
    this.employee._id = this.params;

    //console.log(typeof this.employee);
    this.employeeservice.updateEmployees(this.employee)
      .subscribe((employee) => { alert("Details Updated"); this.router.navigate([`/`]) });
  }


}
