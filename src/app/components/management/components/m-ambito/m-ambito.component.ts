import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddAmbitoComponent } from './dialog-add-ambito/dialog-add-ambito.component';
import { ProcessoAmbito } from 'src/app/models/PROCESSO_AMBITO.model';
import { AmbitoService } from 'src/app/services/ambito.service';
import { DialogDeleteAmbitoComponent } from './dialog-delete-ambito/dialog-delete-ambito.component';
import { DialogEditAmbitoComponent } from './dialog-edit-ambito/dialog-edit-ambito.component';

@Component({
  selector: 'app-m-ambito',
  templateUrl: './m-ambito.component.html',
  styleUrls: ['./m-ambito.component.scss'],
})
export class MAmbitoComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private AmbitoService: AmbitoService
  ) { }

  ambitos: ProcessoAmbito[] = [];

  ngOnInit(): void {
    this.AmbitoService.getAllAmbito()
      .subscribe({
        next: (ambitos: any) => {
          this.ambitos = ambitos;
          console.log(ambitos)
        },
        error: (response: any) => {
          console.log(response)
        }
      })
  }


  alteracaoEvent: EventEmitter<any> = new EventEmitter<any>();

  fazerAlteracao() {
    // Realize a alteração aqui

    // Emita o evento para notificar outros componentes
    console.log(this.alteracaoEvent.emit());
  }

  openDialogAdd(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAddAmbitoComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  
  openDialogRemove(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogDeleteAmbitoComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialogEdit(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogEditAmbitoComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
