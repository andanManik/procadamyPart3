import { Component, OnInit } from '@angular/core';
import { studentService } from './student.service';
import { student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [studentService]
})
export class AppComponent implements OnInit{
  filterText:string=''
  students: student[]=[];
  totalmarks: number=0;
  
  /**
   *
   */
  constructor(private studentService: studentService) {
        
  }
  ngOnInit(): void {
    this.students = this.studentService.studentList;
    this.totalmarks=this.studentService.maximumMark;
  }
  onEnter(){
    console.log(this.filterText)
  }
}
