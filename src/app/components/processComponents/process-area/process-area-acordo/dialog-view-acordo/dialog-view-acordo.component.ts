import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AcordoService } from 'src/app/services/acordo.service';
import { ProcessoAcordo } from 'src/app/models/PROCESSO_ACORDO.model';

@Component({
  selector: 'app-dialog-view-acordo',
  templateUrl: './dialog-view-acordo.component.html',
  styleUrls: ['./dialog-view-acordo.component.scss']
})
export class DialogViewAcordoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public viewData: any,
    private acordoService: AcordoService
  ) { }

  acordoDetalhes: ProcessoAcordo = {
    ID: '',
    DATA_ACORDO: '',
    VALOR_ACORDO: 0,
    ID_PROCESSO: '',
    CRIADOR_ACORDO: '',
    CONDICOES_TENTATIVA_DE_ACORDO: ''
  };

  ngOnInit(): void {
    this.acordoService.getProcessoAcordo(this.viewData.id)
      .subscribe({
        next: (response) => {
          this.acordoDetalhes = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })
  }
}
