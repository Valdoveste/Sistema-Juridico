import { HttpErrorResponse } from '@angular/common/http';
import { readStringArrayType } from '@angular/compiler-cli/src/ngtsc/metadata/src/util';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProcessoAndamento } from 'src/app/models/PROCESSO_ANDAMENTO.model';
import { AndamentoService } from 'src/app/services/andamento.service';

@Component({
  selector: 'app-dialog-edit-andamento',
  templateUrl: './dialog-edit-andamento.component.html',
  styleUrls: ['./dialog-edit-andamento.component.scss']
})
export class DialogEditAndamentoComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public updateData: any,
    private andamentoService: AndamentoService
  ) { }

  fileNames: string[] = []

  createAndamentoForm!: FormGroup

  updateAndamento: ProcessoAndamento = {
    ID: '',
    TIPO_DE_ANDAMENTO: '',
    DATA_ANDAMENTO: '',
    ID_PROCESSO: '',
    CRIADOR_ANDAMENTO: '',
    DESC_ANDAMENTO: '',
    DATA_CADASTRO: ''
  };

  ngOnInit(): void {
    this.createAndamentoForm = new FormGroup({
      TIPO_DE_ANDAMENTO: new FormControl('', [Validators.required]),
      DESC_ANDAMENTO: new FormControl('', [Validators.required])
    });
  }

  loadAndamentos() {
    this.andamentoService.getProcessoAndamento(this.updateData.id)
      .subscribe({
        next: (response) => {
          this.updateAndamento = response;
          this.getAndamentoFile(response.ID!);
        },
        error: (err: HttpErrorResponse) => console.log(err)
      });
  }

  getAndamentoFile(id_andamento: string | String) {
    this.andamentoService.getFileProcessoAndamento(id_andamento)
      .subscribe({
        next: (response: any) => {
          this.fileNames = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      });
  }

  deleteFileAndamento(fileName: string, id_processo: string | String) {
    this.andamentoService.deleteFileProcessoAndamento(fileName, id_processo)
      .subscribe({
        next: (response: any) => {
          this.fileNames = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      });
  }
}
