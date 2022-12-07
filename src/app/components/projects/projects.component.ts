import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projectsList:any[] =[];
  public projectInfo:any;

  constructor(private projectsService : ProjectsService, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.projectsService.getAll().subscribe((response:any ) => {
      this.projectsList = response;
      // console.log(response);
    });
  }

  openProjectDialog(modelRef:any, userObj = null) {
    // console.log(userObj);    
    this.modalService.open(modelRef);
    this.projectInfo = userObj;
  }

  closeModel(modelRef:any) {
    this.modalService.dismissAll(modelRef);
  }

}
