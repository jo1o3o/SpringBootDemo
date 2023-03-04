import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
/**
 * Reusable confirmation dialog. Supply dialog message and (optional) texts for yes and no buttons.
 */
export class ConfirmationDialogComponent {
  // default values
  message: String;
  confirmButtonText = "Yes";
  cancelButtonText = "Cancel";

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<ConfirmationDialogComponent>) {
    if (data) {
      this.message = data.message || this.message;
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
