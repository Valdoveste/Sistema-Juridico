import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  viewAcordoForm!: FormGroup;

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

    let myVariable: boolean = true;

    this.viewAcordoForm = new FormGroup({
      TIPO_DE_ANDAMENTO: new FormControl('',),
      DESC_ANDAMENTO: new FormControl('',)
    });

    this.andamentoService.getProcessoAndamento(this.viewData.id)
      .subscribe({
        next: (response) => {
          this.andamentoDetalhes = response;
        },
        error: (response) => {
          console.log(response)
        }
      })
  }
}
