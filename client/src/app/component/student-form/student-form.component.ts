import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  form!: FormGroup;
  id?: string;
  title!: string;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    // build student form
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.title = "Register Student";
    if (this.id) {
      // edit mode
      this.title = "Update Student";
      this.studentService.getById(this.id)
        .pipe(first())
        .subscribe(student => {
          this.form.patchValue(student);
        });
    }
  }

  // convenience getter for easy access to form fields
  get formControls() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.saveStudent()
      .pipe(first())
      .subscribe({
        next: () => {
          console.log("Student saved!");
          this.router.navigateByUrl('/students');
        },
        error: error => {
          console.log("Failed to save student: " + error);
        }
      })
  }

  private saveStudent() {
    // create or update student based on id param
    return this.id
      ? this.studentService.update(this.id!, this.form.value)
      : this.studentService.register(this.form.value);
  }
}