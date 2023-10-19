import { HttpErrorResponse } from '@angular/common/http';
import { readStringArrayType } from '@angular/compiler-cli/src/ngtsc/metadata/src/util';
import { Component, Inject, OnInit } from '@angular/core';
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
    @Inject(MAT_DIALOG_DATA) public viewData: any,
    private andamentoService: AndamentoService
  ) { }

  fileNames: string[] = []

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
    this.andamentoService.getProcessoAndamento(this.viewData.id)
      .subscribe({
        next: (response) => {
          this.updateAndamento = response;

          this.andamentoService.getFileProcessoAndamento(response.ID!)
            .subscribe({
              next: (response: any) => {
                this.fileNames = response;
              },
              error: (err: HttpErrorResponse) => {
                // console.log(err);
              }
            });
        },
        error: (err: HttpErrorResponse) => {
          // console.log(err)
        }
      });
  }


  deleteFileAndamento(fileName: string, idProcesso: string | String) {
    this.andamentoService.deleteFileProcessoAndamento(fileName, idProcesso)
      .subscribe({
        next: (response: any) => {
          this.fileNames = response;
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      });
  }
}
