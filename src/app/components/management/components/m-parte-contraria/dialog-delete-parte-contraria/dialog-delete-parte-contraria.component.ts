import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ParteContrariaService } from 'src/app/services/parte-contraria.service';

@Component({
  selector: 'app-dialog-delete-parte-contraria',
  templateUrl: './dialog-delete-parte-contraria.component.html',
  styleUrls: ['./dialog-delete-parte-contraria.component.scss']
})

export class DialogDeleteParteContrariaComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public removeData: any,
    private ParteContrariaService: ParteContrariaService,
    public dialogRef: MatDialogRef<DialogDeleteParteContrariaComponent>
  ) { }

  deleteParteContraria() {
    this.ParteContrariaService.deleteParteContraria(this.removeData.id)
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
