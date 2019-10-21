import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
//import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { UserService } from './shared/user.service';
import { AuthInterceptor } from './auth/auth.interceptor';


const routes: Routes = [
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  },
 {
    path: 'employees-list', component: EmployeeListComponent,canActivate:[AuthGuard]
 },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },

  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'edit-employee/:id', component: EmployeeEditComponent },
  { path: 'employees-list', component: EmployeeListComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }