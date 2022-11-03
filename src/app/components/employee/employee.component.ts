import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      // Sub Form Group
      skills: new FormGroup({
        skillName: new FormControl(),
        experienceInYears: new FormControl(),
        proficiency: new FormControl(),
      }),
    });
  }

  onSubmit() {
    console.log(this.employeeForm.touched);
    console.log(this.employeeForm.value);
    console.log(this.employeeForm.get('fullName').value);
  }

  onLoadData() {
    this.employeeForm.setValue({
      fullName: 'Ahmer Najam',
      email: 'ahmer.najam@gmail.com',
      skills: {
        skillName: '.Net',
        experienceInYears: 10,
        proficiency: 'advanced',
      },
    });
  }

  onPatchData() {
    this.employeeForm.patchValue({
      fullName: 'Ahmer Najam Jilani',
    });
  }
}
