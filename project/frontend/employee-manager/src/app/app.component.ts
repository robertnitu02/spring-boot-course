import { Component, OnInit } from '@angular/core';
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
  lastId: number | undefined = undefined;

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
          this.setLastId();
          console.log(this.employees);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
        }
      });
  }

  public addNewEmployee(): void {
    const employee: Employee = {
      name: "Test",
      email: "test@yahoo.com",
      jobTitle: "Somer 2",
      phone: "07amcartela",
      imageUrl: "https://i.imgur.com/zVJcEhn.jpeg",
      employeeCode: "4324232"
    };

    this.employeeService.addEmployee(employee)
      .subscribe({
        next: (response: Employee)=> {
          this.employees.push(response);
          console.log(response);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
        }
      });
  }

  removeLastEmployee(): void {
    if (this.lastId === undefined) return;
    this.employeeService.deleteEmployee(this.lastId)
      .subscribe({
        next: (response: any) => {
          this.employees.pop();
          this.setLastId();
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
        }
      });
  }

  public shouldButtonBlock(): boolean {
    return this.employees.length === 0;
  }

  private setLastId(): void {
    if (this.employees.length === 0) return;

    let length = this.employees.length;
    this.lastId = this.employees[length - 1].id;
  }
}
