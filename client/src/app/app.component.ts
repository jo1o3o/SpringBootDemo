import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  public title = "College Admissions";
  public opened = false;
  public toggleFormControl = new FormControl(false);
  @HostBinding('class') className = '';

  constructor(private overlay: OverlayContainer) { }

  ngOnInit(): void {
    const theme = localStorage.getItem('theme');
    if (theme) {
      // theme exists in local storage
      if (theme == "light") {
        this.className = '';
        this.toggleFormControl.setValue(false);
      } else if (theme == 'dark') {
        this.className = 'dark-theme';
        this.toggleFormControl.setValue(true);
      }
    } else {
      // theme doesn't exist in local storage
      // default to light theme
      this.className = '';
      localStorage.setItem('theme', 'light');
      this.toggleFormControl.setValue(false);
    }

    this.toggleFormControl.valueChanges.subscribe((isDarkMode) => {
      const darkClassName = 'dark-theme';
      this.className = isDarkMode ? darkClassName : '';

      // save to local storage
      if (isDarkMode) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }

      // Some Angular Material components such as dialogs and floating menus are rendered
      // in an overlay container, instead of root component.
      if (isDarkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
  }
}
