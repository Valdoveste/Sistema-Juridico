import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AndamentoService } from 'src/app/services/andamento.service';
import { ProcessoAndamento } from '../../../../models/PROCESSO_ANDAMENTO.model'
import { DialogAddAndamentoComponent } from './dialog-add-andamento/dialog-add-andamento.component';
import { DialogViewAndamentoComponent } from './dialog-view-andamento/dialog-view-andamento.component';
import { DialogEditAndamentoComponent } from './dialog-edit-andamento/dialog-edit-andamento.component';
import { HttpErrorResponse } from '@angular/common/http';

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
            next: (response: ProcessoAndamento[]) => {
              this.andamentos = response;
            },
            error: (err: HttpErrorResponse) => console.log(err)
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

  openDialogView(enterAnimationDuration: string, exitAnimationDuration: string, id: String | undefined): void {
    const dialogRefEdit = this.dialog.open(DialogViewAndamentoComponent, {
      width: '750px',
      data: { id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefEdit.afterClosed().subscribe(result => { result ? this.loadAndamentos() : null; })
  }

  openDialogEdit(enterAnimationDuration: string, exitAnimationDuration: string, id: String | undefined): void {
    const dialogRefEdit = this.dialog.open(DialogEditAndamentoComponent, {
      width: '750px',
      data: { id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefEdit.afterClosed().subscribe(result => { result ? this.loadAndamentos() : null; })
  }
}
