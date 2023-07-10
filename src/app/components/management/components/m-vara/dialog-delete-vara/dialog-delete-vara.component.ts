import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VaraService } from 'src/app/services/vara.service';

@Component({
  selector: 'app-dialog-delete-vara',
  templateUrl: './dialog-delete-vara.component.html',
  styleUrls: ['./dialog-delete-vara.component.scss']
})
export class DialogDeleteVaraComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public removeData: any,
    private VaraService: VaraService,
    public dialogRef: MatDialogRef<DialogDeleteVaraComponent>
  ) { }

  deleteVara() {
    this.VaraService.deleteVara(this.removeData.id)
      .subscribe({
        next: (response) => {
          this.dialogRef.close(true);
        },
        error: (response) => {
          console.log(response)
        }
      });
  }
}