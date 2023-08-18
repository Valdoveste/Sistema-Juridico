import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProcessoAcordo } from 'src/app/models/PROCESSO_ACORDO.model';
import { AcordoService } from 'src/app/services/acordo.service';

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

  viewAcordoForm!: FormGroup;

  acordoDetalhes: ProcessoAcordo = {
    ID: '',
    DATA_ACORDO: '',
    VALOR_ACORDO: 0,
    ID_PROCESSO: '',
    CRIADOR_ACORDO: '',
    CONDICOES_TENTATIVA_DE_ACORDO: ''
  };

  ngOnInit(): void {
    this.viewAcordoForm = new FormGroup({
      VALOR_ACORDO: new FormControl('',),
      CONDICOES_TENTATIVA_DE_ACORDO: new FormControl('',)
    });

    this.acordoService.getProcessoAcordo(this.viewData.id)
      .subscribe({
        next: (response) => {
          // response.VALOR_ACORDO += ",00"
          this.acordoDetalhes = response;
        },
        error: (response) => {
          console.log(response)
        }
      })
  }

}
