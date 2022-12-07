import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddprojectComponent } from './addproject/addproject.component';
import { AddusersprojectComponent } from './addusersproject/addusersproject.component';
import { ProjectsComponent } from './projects.component';
import { ProjectsService } from 'src/app/services/projects.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProjectsComponent,
    AddprojectComponent,
    AddusersprojectComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule
  ],
  providers:[ProjectsService]
})
export class ProjectsModule { }
