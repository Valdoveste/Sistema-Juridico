import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProcessoAndamento } from '../../../../models/PROCESSO_ANDAMENTO.model'

import { DialogAddAndamentoComponent } from './dialog-add-andamento/dialog-add-andamento.component';

import { ActivatedRoute } from '@angular/router';
import { AndamentoService } from 'src/app/services/andamento.service';
import { DialogViewAndamentoComponent } from './dialog-view-andamento/dialog-view-andamento.component';

@Component({
  selector: 'app-process-area-andamento',
  templateUrl: './process-area-andamento.component.html',
  styleUrls: ['./process-area-andamento.component.scss']
})
export class ProcessAreaAndamentoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private andamentoService: AndamentoService
  ) { }

  idProcesso: any;

  andamentos: ProcessoAndamento[] = [];

  ngOnInit(): void {
    this.loadAndamentos()
  }

  loadAndamentos() {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.idProcesso = params.get('id');
        this.andamentoService.getAllProcessoAndamento(this.idProcesso)
          .subscribe({
            next: (response) => {
              this.andamentos = response.sort((a, b) => b.DATA_CADASTRO.localeCompare(a.DATA_CADASTRO));
            },
            error: (response) => {
              console.log(response)
            }
          })
      }
    })
  }

  openDialogAdd(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRefAdd = this.dialog.open(DialogAddAndamentoComponent, {
      width: '750px',
      data: { id: this.idProcesso },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefAdd.afterClosed().subscribe(result => { result ? this.loadAndamentos() : null; })
  }

  openDialogView(enterAnimationDuration: string, exitAnimationDuration: string, event: Event, id: String | undefined): void {
    const dialogRefEdit = this.dialog.open(DialogViewAndamentoComponent, {
      width: '750px',
      data: { value: (event.currentTarget as HTMLElement).previousElementSibling?.innerHTML, id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefEdit.afterClosed().subscribe(result => { result ? this.loadAndamentos() : null; })
  }

  // openDialogEdit(enterAnimationDuration: string, exitAnimationDuration: string, event: Event, id: String | undefined): void {
  //   const dialogRefEdit = this.dialog.open(DialogEditAndamentoComponent, {
  //     height: '600px',
  //     width: '750px',
  //     data: { value: (event.currentTarget as HTMLElement).previousElementSibling?.innerHTML, id: id },
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //   });

  //   dialogRefEdit.afterClosed().subscribe(result => { result ? this.loadAndamentos() : null; })
  // }
}
