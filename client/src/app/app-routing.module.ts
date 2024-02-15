import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { StudentFormComponent } from './component/student-form/student-form.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'addStudent', component: StudentFormComponent },
  { path: 'editStudent/:id', component: StudentFormComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}