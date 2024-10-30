import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-teachers',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-teachers.component.html',
  styleUrl: './add-teachers.component.scss',
})
export class AddTeachersComponent {
  constructor(private toastr: ToastrService){}
  formForum!: FormGroup;

  study = [
    { name: 'Mathematiques', abbrev: 'MATH' },
    { name: 'Physique', abbrev: 'PC' },
    { name: 'EPS', abbrev: 'EPS' },
    { name: 'EDHC', abbrev: 'EDHC' },
    { name: 'Sciences de la Vie et de la Terre', abbrev: 'SVT' },
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
        Validators.minLength(5),
      ]),
      birthday: new FormControl<string | null>('', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(5),
      ]),
      study: new FormControl(this.study[0], Validators.required),
      number: new FormControl<string | null>('', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(5),
      ]),
      state: new FormControl<string | null>('', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(5),
      ]),
    });
  }

  onSubmit(): void {
    let allValue = this.formForum.value;

     if(allValue.name && allValue.name.trim().length > 0)  {
      if (allValue.lastName && allValue.lastname.trim().length > 0) {
        if (allValue.gender && allValue.gender.trim().length > 0 ) {
          // console.log('Passwords match');

          if (allValue.matricule && allValue.matricule.trim().length > 0 ) {
            // console.log('Passwords match');
            this.toastr.success('Formulaire Soumis avec succés', 'Succes' );
          } else {
            console.log('Passwords do not match');
            this.toastr.error( 'les mots de passe ne correspondent pas ','Erreur');

          }
        } else {
          console.log('Passwords do not match');
          this.toastr.error( 'les mots de passe ne correspondent pas ','Erreur');

        }

      }else{
        this.toastr.error( 'veuillez renseigner les champs manquants ','Erreur');
      }

     }else{
      this.toastr.error( 'veuillez renseigner les champs manquants ','Erreur');
    }

  }

  isInvalid(field: AbstractControl): boolean {
    return field.invalid && (field.dirty || field.touched);
  }
}
