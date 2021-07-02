import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditemployeeComponent } from './pages/editemployee/editemployee.component';
import { EmployeeViewComponent } from './pages/employee-view/employee-view.component';
import { NewEmployeeComponent } from './pages/new-employee/new-employee.component';

const routes: Routes = [
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'employees', component:EmployeeViewComponent},
  {path: 'employees/:empid', component:EditemployeeComponent},
  {path: 'newemployee', component:NewEmployeeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
