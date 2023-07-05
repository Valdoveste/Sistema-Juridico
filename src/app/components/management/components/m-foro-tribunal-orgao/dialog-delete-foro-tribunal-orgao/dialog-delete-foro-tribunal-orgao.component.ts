import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ForoTribunalOrgaoService } from 'src/app/services/foro-tribunal-orgao.service';

@Component({
  selector: 'app-dialog-delete-foro-tribunal-orgao',
  templateUrl: './dialog-delete-foro-tribunal-orgao.component.html',
  styleUrls: ['./dialog-delete-foro-tribunal-orgao.component.scss']
})
export class DialogDeleteForoTribunalOrgaoComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public removeData: any,
    private ForoTribunalOrgaoService: ForoTribunalOrgaoService,
    public dialogRef: MatDialogRef<DialogDeleteForoTribunalOrgaoComponent>
  ) { }

  deleteForoTribunalOrgao() {
    this.ForoTribunalOrgaoService.deleteForoTribunalOrgao(this.removeData.id)
      .subscribe({
        next: (response) => {
          this.dialogRef.close(true);
        },
        error: (response) => {
          console.log(response);
        }
      });
  }
}
