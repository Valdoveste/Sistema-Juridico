import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProcessoForoTribunalOrgao } from 'src/app/models/PROCESSO_FORO_TRIBUNAL_ORGAO.model';
import { ForoTribunalOrgaoService } from 'src/app/services/foro-tribunal-orgao.service';

import { DialogAddForoTribunalOrgaoComponent } from './dialog-add-foro-tribunal-orgao/dialog-add-foro-tribunal-orgao.component';
import { DialogDeleteForoTribunalOrgaoComponent } from './dialog-delete-foro-tribunal-orgao/dialog-delete-foro-tribunal-orgao.component';
import { DialogEditForoTribunalOrgaoComponent } from './dialog-edit-foro-tribunal-orgao/dialog-edit-foro-tribunal-orgao.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-m-foro-tribunal-orgao',
  templateUrl: './m-foro-tribunal-orgao.component.html',
  styleUrls: ['./m-foro-tribunal-orgao.component.scss'],
})
export class MForoTribunalOrgaoComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private foroTribunalOrgaoService: ForoTribunalOrgaoService
  ) { }

  foroTribunalOrgaos: ProcessoForoTribunalOrgao[] = [];

  ngOnInit(): void {
    this.loadForoTribunalOrgaos();
  }

  loadForoTribunalOrgaos() {
    this.foroTribunalOrgaoService.getAllForoTribunalOrgao()
      .subscribe({
        next: (foroTribunalOrgaos: ProcessoForoTribunalOrgao[]) => {
          this.foroTribunalOrgaos = foroTribunalOrgaos;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })
  }

  openDialogAdd(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRefAdd = this.dialog.open(DialogAddForoTribunalOrgaoComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefAdd.afterClosed().subscribe(result => { result ? this.loadForoTribunalOrgaos() : null; })
  }

  openDialogRemove(enterAnimationDuration: string, exitAnimationDuration: string, event: Event, id: String | undefined): void {
    const dialogRefRemove = this.dialog.open(DialogDeleteForoTribunalOrgaoComponent, {
      width: '350px',
      data: { value: (event.currentTarget as HTMLElement).previousElementSibling?.previousElementSibling?.innerHTML, id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefRemove.afterClosed().subscribe(result => { result ? this.loadForoTribunalOrgaos() : null; })
  }

  openDialogEdit(enterAnimationDuration: string, exitAnimationDuration: string, event: Event, id: String | undefined): void {
    const dialogRefEdit = this.dialog.open(DialogEditForoTribunalOrgaoComponent, {
      width: '350px',
      data: { value: (event.currentTarget as HTMLElement).previousElementSibling?.innerHTML, id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefEdit.afterClosed().subscribe(result => { result ? this.loadForoTribunalOrgaos() : null; })
  }
}
