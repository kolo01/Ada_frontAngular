import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-students',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-students.component.html',
  styleUrl: './add-students.component.scss',
})
export class AddStudentsComponent {
  formForum!: FormGroup;

  classes = [
    { name: 'Tle', abbrev: 'Tle' },
    { name: '1ère', abbrev: '1ère' },
    { name: '2nd', abbrev: '2nd' },
    { name: '3ème', abbrev: '3ème' },
    { name: '4ème', abbrev: '4ème' },
    { name: '5ème', abbrev: '5ème' },
    { name: '6ème', abbrev: '6ème' },
  ];

  gender = [
    { name: 'Male', abbrev: 'M' },
    { name: 'Female', abbrev: 'F' },

  ];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.formForum = new FormGroup({
      name: new FormControl<string | null>('', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(5),
      ]),
      lastName: new FormControl<string | null>('', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(5),
      ]),
      gender: new FormControl(this.gender[0], Validators.required),
      matricule: new FormControl<string | null>('', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(12),
      ]),
      birthday: new FormControl<string | null>('', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(5),
      ]),
      classe: new FormControl(this.classes[0], Validators.required),
      number: new FormControl<string | null>('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
      ]),
      state: new FormControl<string | null>('', [
        Validators.required,
      ]),
    });
  }

  onSubmit(): void {
    // let allValue  = this.formForum.value
  //  if(allValue.title && allValue.title.trim().length > 0 &&   allValue.content && allValue.content.trim().length > 0)  {
  //    console.log(this.formForum.value);
  //    this.formForum.reset();
  //  }
  console.log(this.formForum.value);
  this.formForum.reset();

 }

  isInvalid(field: AbstractControl): boolean {
    return field.invalid && (field.dirty || field.touched);
  }
}
