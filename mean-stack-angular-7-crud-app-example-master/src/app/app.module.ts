import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiService } from './service/api.service';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { UserService } from './shared/user.service';
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeListComponent,
    EmployeeEditComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService,ApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }