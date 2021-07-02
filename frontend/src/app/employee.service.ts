import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Employee from './models/employees';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private webService: WebService) {}
    getEmployees(page: string, size: string){
      return this.webService.get(`employees?page=${page}&size=${size}`);
    }

    searchEmployees(name: string){
      return this.webService.get(`employees/search/${name}`);
    }

    addEmployees(employee: Employee){
      //console.log("empse", employee);
      return this.webService.post('employees', {employee});
    }

    editEmployees(employeeId: string){
      return this.webService.get(`employees/${employeeId}`);
      
    }

    updateEmployees(employee: Employee){
      return this.webService.patch(`employees/${employee._id}`, employee);
    }

    deleteEmployees(employeeId: string){
      return this.webService.delete(`employees/${employeeId}`)
    }
}
