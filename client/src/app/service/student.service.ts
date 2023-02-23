import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Student } from 'src/app/model/student';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // url for REST endpoints
  private studentUrl: string;

  constructor(private http: HttpClient) {
    this.studentUrl = "http://localhost:8080/api/v1/student";
  }

  public getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl);
  }

  public getById(id: string): Observable<Student> {
    return this.http.get<Student>(this.studentUrl + "/" + id);
  }

  public register(student: Student) {
    return this.http.post<Student>(this.studentUrl, student);
  }

  public delete(id: string) {
    return this.http.delete(this.studentUrl + "/" + id);
  }

  public update(id: string, student: Student) {
    return this.http.put<Student>(this.studentUrl + "/" + id, student);
  }
}
