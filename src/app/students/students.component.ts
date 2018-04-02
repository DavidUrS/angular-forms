import { Component, OnInit } from '@angular/core';
import { Students } from '../models/students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  modelStudent = new Students();
  listStudents:Students[]=[];


  constructor() { }

  ngOnInit() {

  }

  onSubmit(){
    const newStudent: Students = {
      id: this.modelStudent.id,
      name : this.modelStudent.name,
      lastname : this.modelStudent.lastname,
      age : this.modelStudent.age
    };
    this.listStudents.push(newStudent);
    console.log('Lista de estudiantes ',this.listStudents);
    this.modelStudent.id=null;
    this.modelStudent.name='';
    this.modelStudent.lastname='';
    this.modelStudent.age=null;
  }

}
