import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PatronoResponsavelService } from 'src/app/services/patrono-responsavel.service';

@Component({
  selector: 'app-dialog-delete-patrono-responsavel',
  templateUrl: './dialog-delete-patrono-responsavel.component.html',
  styleUrls: ['./dialog-delete-patrono-responsavel.component.scss']
})
export class DialogDeletePatronoResponsavelComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public removeData: any,
    private patronoResponsavelService: PatronoResponsavelService,
    public dialogRef: MatDialogRef<DialogDeletePatronoResponsavelComponent>
  ) { }

  deletePatronoResponsavel() {
    this.patronoResponsavelService.deletePatronoResponsavel(this.removeData.id)
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
