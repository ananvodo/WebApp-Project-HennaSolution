import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public usersList:any[] =[];
  public userInfo:any;

  constructor(private userService : UsersService, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.userService.getAll().subscribe((response:any ) => {
      this.usersList = response;
      // console.log(response);
    });
  }

  openUserDialog(modelRef:any, userObj = null) {
    // console.log(userObj);    
    this.modalService.open(modelRef);
    this.userInfo = userObj;
  }

  closeModel(modelRef:any) {
    this.modalService.dismissAll(modelRef);
  }

}
