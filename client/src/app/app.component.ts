import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = "College Admissions";
  opened = false;
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  mode: string;

  constructor(private darkModeService: DarkModeService) { }
  
  ngOnInit(): void {
    this.darkMode$.subscribe(darkMode => {
      darkMode ? this.mode = "Dark Mode" : this.mode = "Light Mode"; 
    });
  }

  onToggle(): void {
    this.darkModeService.toggle();
  }
}
