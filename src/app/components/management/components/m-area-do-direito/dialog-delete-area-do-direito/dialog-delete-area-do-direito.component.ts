import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AreaDoDireitoService } from 'src/app/services/area-do-direito.service';

@Component({
  selector: 'app-dialog-delete-area-do-direito',
  templateUrl: './dialog-delete-area-do-direito.component.html',
  styleUrls: ['./dialog-delete-area-do-direito.component.scss']
})
export class DialogDeleteAreaDoDireitoComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public removeData: any,
    private areaDoDireitoService: AreaDoDireitoService,
    public dialogRef: MatDialogRef<DialogDeleteAreaDoDireitoComponent>
  ) { }

  deleteAreaDoDireito() {
    this.areaDoDireitoService.deleteAreaDoDireito(this.removeData.id)
      .subscribe({
        next: () => {
          this.dialogRef.close(true);
        },
        error: (err: HttpErrorResponse) => console.log(err)
      });
  }
}
