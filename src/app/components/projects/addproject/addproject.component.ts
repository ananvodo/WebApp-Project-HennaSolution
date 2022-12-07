import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {

  public projectBool: boolean = true;
  public projectForm:FormGroup = new FormGroup({});
  public loader : boolean = false;
  public tempFile: any;

  @Input()
  public projectInfo:any;

  @Output()
  public closeModel: EventEmitter<void> = new EventEmitter<void>();

  constructor( private modalService: NgbModal,  private fb:FormBuilder) { }

  ngOnInit(): void {
    if(this.projectInfo) {
      this.initialForm(this.projectInfo);
    } else{
      this.initialForm();
    }
   
  }

  initialForm(projectObj: any = null) {
    if (projectObj === null) {
      this.projectForm = this.fb.group({
        projectName: ["", Validators.required], // name of the project
        projectType: ["", Validators.required], // projectname alias
        manager: ["", Validators.required],
        deadline: ["", Validators.required],
        managerEmail: ["", Validators.required],
        contact: ["", Validators.required],
        projectId: [null],
      });
    } else {
      this.projectForm = this.fb.group({
        projectName: [projectObj.projectName, Validators.required], // name of the project
        projectType: [projectObj.projectType, Validators.required], // projectname alias
        manager: [projectObj.manager, Validators.required],
        deadline: [projectObj.deadline, Validators.required],
        managerEmail: [projectObj.managerEmail, Validators.required],
        contact: [projectObj.contact, Validators.required],
        projectId: [projectObj.projectId],
      });
    }
  }

  close() {
    this.closeModel.emit();
  }
}
