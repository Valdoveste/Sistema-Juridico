import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AmbitoService } from 'src/app/services/ambito.service';

@Component({
  selector: 'app-dialog-delete-ambito',
  templateUrl: './dialog-delete-ambito.component.html',
  styleUrls: ['./dialog-delete-ambito.component.scss']
})
export class DialogDeleteAmbitoComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public removeData: any,
    private AmbitoService: AmbitoService,
    public dialogRef: MatDialogRef<DialogDeleteAmbitoComponent>
  ) { }

  deleteAmbito() {
    this.AmbitoService.deleteAmbito(this.removeData.id)
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
