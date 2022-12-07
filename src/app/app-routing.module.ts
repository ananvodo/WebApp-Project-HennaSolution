import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ForgetPasswordComponent } from './components/auth/forget-password/forget-password.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UsersComponent } from './components/users/users.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AddusersComponent } from './components/users/addusers/addusers.component';
import { MeetingsComponent } from './components/meetings/meetings.component';

const routes: Routes = [
  { path :'' , component: DashboardComponent },
  { path :'dashboard' , component: DashboardComponent },
  { path :'contactus' , component: ContactusComponent },
  { path :'aboutus' , component: AboutusComponent },
  { path :'auth' , children :[
      {path: 'login' , component: LoginComponent},
      {path: 'register' , component: RegisterComponent},
      {path: 'forget-password' , component: ForgetPasswordComponent},
  ]},
  { path :'users' , children :[
    {path: '' , component: UsersComponent},
    {path: 'create' , component: AddusersComponent},
    {path: 'update' , component: AddusersComponent}
  ]},
  { path :'meetings' , children :[
    {path: '' , component: MeetingsComponent},
  ]},
  { path :'projects' , children :[
    {path: '' , component: ProjectsComponent},
  ]},
  { path:"**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
