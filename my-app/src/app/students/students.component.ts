import { Component, OnInit } from '@angular/core';

import { Student } from '../student';
import { StudentService } from '../student.service'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
      this.studentService.getStudents().subscribe((students => this.students = students), error => console.log(error))
  }

}
