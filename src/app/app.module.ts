import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/Day3/components/home/home.component';
import { LoginComponent } from './components/Day3/components/login/login.component';
import { ValidationComponent } from './components/Day4/components/validation/validation.component';
import { UsersComponent } from './components/Day4/Routing/users/users.component';
import { UserDetailsComponent } from './components/Day4/Routing/user-details/user-details.component';
import { ProfileComponent } from './components/Day4/Routing/profile/profile.component';
import { ErrorComponent } from './components/Day4/Routing/error/error.component';
import { HeaderComponent } from './components/Day4/Routing/header/header.component';
import { RouterModule } from '@angular/router';
import { StudentComponent } from './components/Day4/Task/student/student.component';
import { StudentDetailsComponent } from './components/Day4/Task/student-details/student-details.component';
import { Home2Component } from './components/Day4/Task/home2/home2.component';
import { Header2Component } from './components/Day4/Task/header2/header2.component';
import { Error2Component } from './components/Day4/Task/error2/error2.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    HomeComponent,
    LoginComponent,
    ValidationComponent,
    UsersComponent,
    UserDetailsComponent,
    ProfileComponent,
    ErrorComponent,
    HeaderComponent,
    StudentComponent,
    StudentDetailsComponent,
    Home2Component,
    Header2Component,
    Error2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([

      {path:"users",component:UsersComponent},
      {path:"users/:id",component:UserDetailsComponent},
      {path:"profile",component:ProfileComponent},

      {path:"",component:Home2Component},
      {path:"home",component:Home2Component},
      {path:"student",component:StudentComponent},
      { path: "student/:id", component: StudentDetailsComponent },
      {path:"**",component:Error2Component},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
