import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProcessoAndamento } from 'src/app/models/PROCESSO_ANDAMENTO.model';
import { AndamentoService } from 'src/app/services/andamento.service';

@Component({
  selector: 'app-dialog-view-andamento',
  templateUrl: './dialog-view-andamento.component.html',
  styleUrls: ['./dialog-view-andamento.component.scss']
})
export class DialogViewAndamentoComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public viewData: any,
    private andamentoService: AndamentoService
  ) { }

  fileNames: string[] = []

  andamentoDetalhes: ProcessoAndamento = {
    ID: '',
    TIPO_DE_ANDAMENTO: '',
    DATA_ANDAMENTO: '',
    ID_PROCESSO: '',
    CRIADOR_ANDAMENTO: '',
    DESC_ANDAMENTO: '',
    DATA_CADASTRO: '',
  };

  ngOnInit(): void {
    this.andamentoService.getProcessoAndamento(this.viewData.id)
      .subscribe({
        next: (response) => {
          this.andamentoDetalhes = response;

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
      })
  }
}
