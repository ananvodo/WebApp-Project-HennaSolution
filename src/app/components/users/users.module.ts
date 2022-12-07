import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { AddusersComponent } from './addusers/addusers.component';
import { UsersService } from 'src/app/services/users.service';
import { ProjectsService } from 'src/app/services/projects.service';
import { MeetingsService } from 'src/app/services/meetings.service';

@NgModule({
  declarations: [
    UsersComponent,
    AddusersComponent
  ],
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule
  ],
  providers:[UsersService, ProjectsService, MeetingsService]
})
export class UsersModule { }
