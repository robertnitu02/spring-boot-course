import {Component, OnInit } from '@angular/core';
import { Employee } from './model/employee';
import { EmployeeService } from './services/employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe({
        next: (response: Employee[])=> {
          this.employees = response;
          console.log(this.employees);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
        }
      });
  }

}
