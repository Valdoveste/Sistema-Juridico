import { Component, OnInit } from '@angular/core';
import { ProcessoForoTribunalOrgao } from 'src/app/models/PROCESSO_FORO_TRIBUNAL_ORGAO.model';
import { ForoTribunalOrgaoService } from 'src/app/services/foro-tribunal-orgao.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-foro-tribunal-orgao',
  templateUrl: './dialog-add-foro-tribunal-orgao.component.html',
  styleUrls: ['./dialog-add-foro-tribunal-orgao.component.scss']
})
export class DialogAddForoTribunalOrgaoComponent implements OnInit {
  constructor(
    private ForoTribunalOrgaoService: ForoTribunalOrgaoService,
    public dialogRef: MatDialogRef<DialogAddForoTribunalOrgaoComponent>,
  ) { }

  createForoTribunalOrgaoForm!: FormGroup;

  createForoTribunalOrgaoRequest: ProcessoForoTribunalOrgao = {
    ID: '',
    FORO_TRIBUNAL_ORGAO: ''
  }

  ngOnInit(): void {
    this.createForoTribunalOrgaoForm = new FormGroup({
      FORO_TRIBUNAL_ORGAO: new FormControl('', [Validators.required])
    });
  }

  createForoTribunalOrgao() {
    if (this.createForoTribunalOrgaoForm.valid) {
      this.ForoTribunalOrgaoService.createForoTribunalOrgao(this.createForoTribunalOrgaoRequest)
        .subscribe({
          next: (response) => {
            this.dialogRef.close(true);
            this.createForoTribunalOrgaoForm.reset();
          },
          error: (response) => {
            console.log(response)
          }
        });
    }
    return;
  }
}
