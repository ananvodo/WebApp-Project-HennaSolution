import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {

  public userBool: boolean = true;
  public userForm:FormGroup = new FormGroup({});
  public loader : boolean = false;
  public tempFile: any;

  @Input()
  public userInfo:any;

  @Output()
  public closeModel: EventEmitter<void> = new EventEmitter<void>();

  constructor( private modalService: NgbModal,  private fb:FormBuilder) { }

  ngOnInit(): void {
    if(this.userInfo) {
      this.initialForm(this.userInfo);
    } else{
      this.initialForm();
    }
   
  }

  initialForm(userObj: any = null) {
    if (userObj === null) {
      this.userForm = this.fb.group({
        userFullname: ["", Validators.required], // name of the user
        userName: ["", Validators.required], // username alias
        userCity: ["", Validators.required],
        userEmail: ["", Validators.required],
        userContact: ["", Validators.required],
        userId: [null],
      });
    } else {
      this.userForm = this.fb.group({
        userFullname: [userObj.fullName, Validators.required],
        userName: [userObj.username, Validators.required], // username alias
        userCity: [userObj.address.city, Validators.required],
        userEmail: [userObj.email, Validators.required],
        userContact: [userObj.contact, Validators.required],
        userId: [userObj.userId],
      });
    }
  }

  close() {
    this.closeModel.emit();
  }
}
