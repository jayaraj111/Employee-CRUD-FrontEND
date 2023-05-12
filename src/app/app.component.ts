import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './service/employee.service';
import { Employee } from './models/employee';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EMPLOYEE CRUD DEMO';
  employeeList: Employee[] = [];
  employeeFormGroup: FormGroup;

  // employeeList: any = [];

  constructor(private _employeeservice: EmployeeService, private fb: FormBuilder) {
    this.employeeFormGroup = this.fb.group({
      id: [""],
      name: [""],
      mobileNo: [""],
      emailId: [""]
    })
  }

  ngOnInit(): void {
    this.GetEmployees();
  }



  GetEmployees() {
    this._employeeservice.GetEmployees().subscribe((response: any) => {
      this.employeeList = response;
    });
  }

  OnSubmit() {
  if(this.employeeFormGroup.value.id != null && this.employeeFormGroup.value.id != "" ){
    this._employeeservice.UpdateEmployee(this.employeeFormGroup.value).subscribe((response: any) => {
      this.GetEmployees();
    });
  }
  else{
    this._employeeservice.CreateEmployee(this.employeeFormGroup.value).subscribe((response: any) => {
      this.GetEmployees();
    });
   
  }
   
    this.employeeFormGroup.reset();
  }


  Fillform(emp:Employee) {
  this.employeeFormGroup.setValue({
    id:emp.id,
    name:emp.name,
    emailId:emp.emailId,
    mobileNo:emp.mobileNo
  });
  }

  DeleteEmployee(id:string)
  {
    this._employeeservice.DeleteEmployee(id).subscribe((response: any) => {
      this.GetEmployees();
    });

  }





}


