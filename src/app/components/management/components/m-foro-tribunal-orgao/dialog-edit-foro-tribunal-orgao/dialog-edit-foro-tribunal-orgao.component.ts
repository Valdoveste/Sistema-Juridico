import { Component, Inject, OnInit } from '@angular/core';
import { ForoTribunalOrgaoService } from 'src/app/services/foro-tribunal-orgao.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProcessoForoTribunalOrgao } from 'src/app/models/PROCESSO_FORO_TRIBUNAL_ORGAO.model';

@Component({
  selector: 'app-dialog-edit-foro-tribunal-orgao',
  templateUrl: './dialog-edit-foro-tribunal-orgao.component.html',
  styleUrls: ['./dialog-edit-foro-tribunal-orgao.component.scss']
})
export class DialogEditForoTribunalOrgaoComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public updateData: any,
    private ForoTribunalOrgaoService: ForoTribunalOrgaoService,
    public dialogRef: MatDialogRef<DialogEditForoTribunalOrgaoComponent>,
  ) { }

  updateForoTribunalOrgaoForm!: FormGroup;

  updateForoTribunalOrgaoRequest: ProcessoForoTribunalOrgao = {
    ID: '',
    FORO_TRIBUNAL_ORGAO: ''
  }

  ngOnInit(): void {
    this.updateForoTribunalOrgaoForm = new FormGroup({
      ForoTribunalOrgao: new FormControl("", [Validators.required])
    });
  }

  updateForoTribunalOrgaos() {
    if (this.updateForoTribunalOrgaoForm.valid) {
      this.updateForoTribunalOrgaoRequest.FORO_TRIBUNAL_ORGAO = this.updateData.value;
      this.ForoTribunalOrgaoService.updateForoTribunalOrgao(this.updateData.id, this.updateForoTribunalOrgaoRequest)
        .subscribe({
          next: (response) => {
            this.dialogRef.close(true);
          },
          error: (response) => {
            console.log(response)
          }
        });
    }
    return;
  }
}
