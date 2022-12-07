import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingsComponent } from './meetings.component';
import { AddmeetingsComponent } from './addmeetings/addmeetings.component';
import { MeetingsService } from 'src/app/services/meetings.service';
import { AddusersmeetingComponent } from './addusersmeeting/addusersmeeting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MeetingsComponent,
    AddmeetingsComponent,
    AddusersmeetingComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule
  ],
  providers:[MeetingsService]
})
export class MeetingsModule { }
