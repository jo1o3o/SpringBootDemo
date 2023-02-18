import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  displayedColumns = [
    'id',
    'name',
    'email',
    'edit',
    'delete'
  ];

  students: Student[];
  dataSource: MatTableDataSource<Student>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {}) sort: MatSort;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.findAll().subscribe(data => {
      this.students = data;
      this.dataSource = new MatTableDataSource(this.students);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  filterStudent(value: String): void {
    // TODO: filter students list
  }

  edit(student: Student): void {
    console.log("Edit button clicked.");
  }

  delete(id: String): void {
    console.log("Delete button clicked.")
  }
}
