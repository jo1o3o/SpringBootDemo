import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

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
    private router: Router,
    public dialog: MatDialog) { }

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

  delete(student: Student): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: "Are you sure you want to delete the following student?\n\n" + student.name
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.deleteStudent(student.id);
      }
    });
  }

  deleteStudent(id: string) {
    this.studentService.delete(id).subscribe(response => {
      this.getStudents();
    });
  }
}