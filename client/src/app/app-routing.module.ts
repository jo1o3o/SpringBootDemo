import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentFormComponent } from './component/student-form/student-form.component';
import { StudentListComponent } from './component/student-list/student-list.component';

const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: 'addStudent', component: StudentFormComponent },
  { path: 'editStudent/:id', component: StudentFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}