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
  selector: 'app-add-users',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-users.component.html',
  styleUrl: './add-users.component.scss',
})
export class AddUsersComponent {
  constructor(private toastr: ToastrService){}
  formForum!: FormGroup;

  ngOnInit(): void {
    this.formForum = new FormGroup({
      pseudo: new FormControl<string | null>('', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(3),
      ]),
      password: new FormControl<string | null>('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(8),
      ]),

      confirmPasssword: new FormControl<string | null>('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit(): void {
    let allValue = this.formForum.value;

     if(allValue.pseudo && allValue.pseudo.trim().length > 0 &&   allValue.password && allValue.password.trim().length > 0 )  {
      if (allValue.confirmPasssword && allValue.confirmPasssword.trim().length > 0) {
        if (allValue.password === allValue.confirmPasssword) {
          // console.log('Passwords match');
          this.toastr.success('Formulaire Soumis avec succés', 'Succes' );
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
