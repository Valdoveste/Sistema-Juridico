import { Component, Inject, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/services/empresas.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProcessoEmpresas } from 'src/app/models/PROCESSO_EMPRESAS.model';

@Component({
  selector: 'app-dialog-edit-empresas',
  templateUrl: './dialog-edit-empresas.component.html',
  styleUrls: ['./dialog-edit-empresas.component.scss']
})
export class DialogEditEmpresasComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public updateData: any,
    private empresasService: EmpresasService,
    public dialogRef: MatDialogRef<DialogEditEmpresasComponent>,
  ) { }

  updateEmpresasForm!: FormGroup;

  updateEmpresasRequest: ProcessoEmpresas = {
    ID: '',
    EMPRESA: '',
    CPF_CNPJ: ''
  }

  ngOnInit(): void {
    this.updateEmpresasForm = new FormGroup({
      EMPRESAS: new FormControl("", [Validators.required])
    });
  }

  updateEmpresas() {
    if (this.updateEmpresasForm.valid) {
      this.updateEmpresasRequest.EMPRESA = this.updateData.value;
      this.empresasService.updateEmpresas(this.updateData.id, this.updateEmpresasRequest)
        .subscribe({
          next: (response) => {
            this.dialogRef.close(true);
          },
          error: (response) => {
            console.log(response);
          }
        });
    }
    return;
  }
}
