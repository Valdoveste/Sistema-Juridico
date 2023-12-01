import { Component, OnInit } from '@angular/core';
import { ProcessoEmpresas } from 'src/app/models/PROCESSO_EMPRESAS.model';
import { EmpresasService } from 'src/app/services/empresas.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dialog-add-empresas',
  templateUrl: './dialog-add-empresas.component.html',
  styleUrls: ['./dialog-add-empresas.component.scss']
})
export class DialogAddEmpresasComponent implements OnInit {
  constructor(
    private empresasService: EmpresasService,
    public dialogRef: MatDialogRef<DialogAddEmpresasComponent>,
  ) { }

  createEmpresasForm!: FormGroup;

  createEmpresasRequest: ProcessoEmpresas = {
    ID: '',
    EMPRESA: '',
    CPF_CNPJ: ''
  }

  ngOnInit(): void {
    this.createEmpresasForm = new FormGroup({
      EMPRESA: new FormControl('', [Validators.required]),
      CPF_CNPJ: new FormControl('', [Validators.required])
    });
  }

  createEmpresas() {
    if (this.createEmpresasForm.valid) {
      this.empresasService.createEmpresas(this.createEmpresasRequest)
        .subscribe({
          next: () => {
            this.dialogRef.close(true);
            this.createEmpresasForm.reset();
          },
          error: (err: HttpErrorResponse) => console.log(err)
        });
    }
    return;
  }
}
