import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Student } from 'src/app/model/student';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // url for REST endpoints
  private studentUrl: string;

  constructor(private http: HttpClient) {
    this.studentUrl = "http://localhost:8080/api/v1/student";
  }

  public findAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl);
  }

  public save(student: Student) {
    return this.http.post<Student>(this.studentUrl, student);
  }

  public delete(id : String) {
    return this.http.delete(this.studentUrl + "/" + id);
  }

  public update(student: Student) {
    return this.http.put<Student>(
      this.studentUrl + "/" + student.id,
      { params: { name: student.name, email: student.email } }
    )
  }
}
