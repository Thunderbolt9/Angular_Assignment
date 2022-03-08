import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  employeeModel = new Employee(
    'Bhavesh',
    'Mumbai',
    9999999999,
    new Date(Date.now()),
    'dummy@gmail.com'
  );

  constructor() {}

  topicHasError = true;
  submitted = false;
  errorMsg = '';

  validateTopic(value: any) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.employeeModel);
  }
}
