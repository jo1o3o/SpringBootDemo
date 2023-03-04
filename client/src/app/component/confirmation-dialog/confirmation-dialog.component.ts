import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {

  // default values
  message = "Are you sure want to delete?";
  confirmButtonText = "Yes";
  cancelButtonText = "Cancel";

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<ConfirmationDialogComponent>) {
    if (data) {
      // Check if values are present in the passed in data. If not, use default values.
      if (data.message) {
        this.message = data.message || this.message;
      }
      if (data.confirmButtonText) {
        this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
      }
      if (data.cancelButtonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}
