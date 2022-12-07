import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addmeetings',
  templateUrl: './addmeetings.component.html',
  styleUrls: ['./addmeetings.component.css']
})
export class AddmeetingsComponent implements OnInit {

  public meetingBool: boolean = true;
  public meetingForm:FormGroup = new FormGroup({});
  public loader : boolean = false;
  public tempFile: any;

  @Input()
  public meetingInfo:any;

  @Output()
  public closeModel: EventEmitter<void> = new EventEmitter<void>();

  constructor( private modalService: NgbModal,  private fb:FormBuilder) { }

  ngOnInit(): void {
    if(this.meetingInfo) {
      this.initialForm(this.meetingInfo);
    } else{
      this.initialForm();
    }
   
  }

  initialForm(meetingObj: any = null) {
    if (meetingObj === null) {
      this.meetingForm = this.fb.group({
        meetingName: ["", Validators.required], // name of the meeting
        meetingType: ["", Validators.required], // meetingname alias
        hostFullName: ["", Validators.required],
        time: ["", Validators.required],
        hostEmail: ["", Validators.required],
        contact: ["", Validators.required],
        meetingId: [null],
      });
    } else {
      this.meetingForm = this.fb.group({
        meetingName: [meetingObj.meetingName, Validators.required], // name of the meeting
        meetingType: [meetingObj.meetingType, Validators.required], // meetingname alias
        hostFullName: [meetingObj.hostFullName, Validators.required],
        time: [meetingObj.time, Validators.required],
        hostEmail: [meetingObj.hostEmail, Validators.required],
        contact: [meetingObj.contact, Validators.required],
        meetingId: [meetingObj.meetingId],
      });
    }
  }

  close() {
    this.closeModel.emit();
  }

}
