import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MeetingsService } from 'src/app/services/meetings.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  public meetingsList:any[] =[];
  public meetingInfo:any;

  constructor(private meetingsService : MeetingsService, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.meetingsService.getAll().subscribe((response:any ) => {
      this.meetingsList = response;
      // console.log(response);
    });
  }

  openMeetingDialog(modelRef:any, userObj = null) {
    // console.log(userObj);    
    this.modalService.open(modelRef);
    this.meetingInfo = userObj;
  }

  closeModel(modelRef:any) {
    this.modalService.dismissAll(modelRef);
  }
}