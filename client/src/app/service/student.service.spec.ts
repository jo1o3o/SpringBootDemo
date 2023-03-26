import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StudentService } from './student.service';
import { mockStudent1, mockStudent3, mockStudents } from 'src/mocks/mockStudents';
import { Student } from '../model/student';

describe('StudentServiceService', () => {
  let service: StudentService;
  let httpController: HttpTestingController;
  let url = "http://localhost:8080/api/v1/student";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(StudentService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getAll and return an array of students', () => {

    // service call
    service.getAll().subscribe((res) => {
      expect(res).toEqual(mockStudents);
    });

    // expected rest call
    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}`,
    });

    // return mockStudents when GET (all) method is called
    req.flush(mockStudents);
  });

  it('should get student by id', () => {

    // id to get student by
    const id = "1";

    // service call
    service.getById(id).subscribe((data) => {
      expect(data).toEqual(mockStudent1);
    });

    // expected rest call
    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}/${id}`,
    });

    // return mockStudent1 when GET (by id) method is called
    req.flush(mockStudent1);
  });

  it('should register new student', () => {

    let newStudent = new Student("5", "James", "james@gmail.com");

    // mock students array after registering new student
    let mockStudentsAfterRegister = [
      new Student("1", "Jin", "jin@gmail.com"),
      new Student("2", "Jennifer", "jennifer@gmail.com"),
      new Student("3", "Jacob", "jacob@gmail.com"),
      new Student("4", "Chris", "chris@gmail.com"),
      new Student("5", "James", "james@gmail.com")
    ];

    // service call
    service.register(newStudent).subscribe(data => {
      expect(data).toEqual(newStudent);
    });

    // expected rest call
    const req = httpController.expectOne({
      method: 'POST',
      url: `${url}`,
    });

    // return registered student when POST method is called
    req.flush(newStudent);
  });

  it('should delete student', () => {

    // id of student to update
    const id = "3";

    // mock students array after deletion
    let mockStudentsAfterDelete = [
      new Student("1", "Jin", "jin@gmail.com"),
      new Student("2", "Jennifer", "jennifer@gmail.com"),
      new Student("4", "Chris", "chris@gmail.com")
    ];

    // service call
    service.delete(id).subscribe(data => {
      expect(data).toEqual(mockStudentsAfterDelete);
    });

    // expected rest call
    const req = httpController.expectOne({
      method: 'DELETE',
      url: `${url}/${id}`,
    });

    // return mock student array when DELETE method is called
    req.flush(mockStudentsAfterDelete);
  });

  it('should update student', () => {

    // id of student to update
    const id = "3";

    // mock updated student data
    const updatedStudent = new Student(id, "Jake", "jake@gmail.com");

    // service call
    service.update(id, mockStudent3).subscribe((data) => {
      expect(data).toEqual(updatedStudent);
    });

    // expected rest call
    const req = httpController.expectOne({
      method: 'PUT',
      url: `${url}/${id}`,
    });

    // return mock updated student when PUT method is called
    req.flush(updatedStudent);
  });
});
