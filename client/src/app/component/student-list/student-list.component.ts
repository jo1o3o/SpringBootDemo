import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {

  displayedColumns = [
    'id',
    'name',
    'email',
    'actions'
  ];

  students: Student[];
  dataSource: MatTableDataSource<Student>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {}) sort: MatSort;

  constructor(
    private studentService: StudentService,
    private router: Router) { }

  ngOnInit() {
    this.getStudents();
  }

  filterStudent(value: String): void {
    // TODO: filter students list
  }

  getStudents() {
    this.studentService.getAll().subscribe(data => {
      this.students = data;
      this.dataSource = new MatTableDataSource(this.students);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  edit(id: string): void {
    this.router.navigate(['/editStudent', id]);
  }

  delete(id: string): void {
    this.studentService.delete(id).subscribe(response => {
      this.getStudents();
    });
  }
}