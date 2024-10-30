import { Routes } from '@angular/router';
import { LoginComponent } from './presentations/login/login.component';
import { UsersComponent } from './presentations/users/users.component';
import { StudentsComponent } from './presentations/students/students.component';
import { DashboardComponent } from './presentations/dashboard/dashboard.component';
import { TeachersComponent } from './presentations/teachers/teachers.component';
import { AddUsersComponent } from './presentations/add-users/add-users.component';
import { AddStudentsComponent } from './presentations/add-students/add-students.component';
import { AddTeachersComponent } from './presentations/add-teachers/add-teachers.component';
import { ReportComponent } from './presentations/report/report.component';

export const routes: Routes = [
  {path: 'login', component:  LoginComponent},
  {path: "users", component: UsersComponent},
  {path: "students", component: StudentsComponent},
  {path: "", component: DashboardComponent},
  {path: 'teachers', component: TeachersComponent},
  {path: "add_users", component: AddUsersComponent},
  {path: "add_students", component: AddStudentsComponent},
  {path: "add_teachers", component: AddTeachersComponent},
  {path: "report", component: ReportComponent},


  //tu te trompes de route je te balances sur login
  {path: '**', redirectTo: 'login'}
];
