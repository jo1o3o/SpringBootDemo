import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Student } from 'src/app/model/student';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // url for REST endpoints
  private studentUrl: string;

  constructor(private http: HttpClient, private userService: UserService) {
    this.studentUrl = "http://localhost:8080/students";
  }

  public getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl, { headers: this.userService.headers });
  }

  public getById(id: string): Observable<Student> {
    return this.http.get<Student>(this.studentUrl + "/" + id, { headers: this.userService.headers });
  }

  public register(student: Student) {
    return this.http.post<Student>(this.studentUrl, student, { headers: this.userService.headers });
  }

  public delete(id: string) {
    return this.http.delete(this.studentUrl + "/" + id, { headers: this.userService.headers });
  }

  public update(id: string, student: Student) {
    return this.http.put<Student>(this.studentUrl + "/" + id, student, { headers: this.userService.headers });
  }
}