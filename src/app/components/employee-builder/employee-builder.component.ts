import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee-builder',
  templateUrl: './employee-builder.component.html',
  styleUrls: ['./employee-builder.component.css'],
})
export class EmployeeBuilderComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
      email: [''],
      // Sub Form Group
      skills: this.fb.group({
        skillName: [''],
        experienceInYears: ['1'],
        proficiency: ['beginner'],
      }),
    });
  }

  logKeyValuePairs(group: FormGroup) {
    Object.keys(group.controls).forEach((key) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logKeyValuePairs(abstractControl);
      } else {
        console.log('Key: ' + key + ' | Value: ' + abstractControl.value);
        abstractControl.disable();
        abstractControl.markAsDirty();
      }
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

    this.logKeyValuePairs(this.employeeForm);
  }

  onPatchData() {
    this.employeeForm.patchValue({
      fullName: 'Ahmer Najam Jilani',
    });
  }
}
