import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FaseService } from 'src/app/services/fase.service';

@Component({
  selector: 'app-dialog-delete-fase',
  templateUrl: './dialog-delete-fase.component.html',
  styleUrls: ['./dialog-delete-fase.component.scss']
})
export class DialogDeleteFaseComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public removeData: any,
    private FaseService: FaseService,
    public dialogRef: MatDialogRef<DialogDeleteFaseComponent>
  ) { }

  deleteFase() {
    this.FaseService.deleteFase(this.removeData.id)
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
