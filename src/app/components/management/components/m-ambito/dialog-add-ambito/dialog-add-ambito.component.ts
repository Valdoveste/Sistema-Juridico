import { ChangeDetectorRef, Component, EventEmitter, OnInit } from '@angular/core';
import { ProcessoAmbito } from 'src/app/models/PROCESSO_AMBITO.model';
import { AmbitoService } from 'src/app/services/ambito.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { MAmbitoComponent } from '../m-ambito.component';
@Component({
  selector: 'app-dialog-add-ambito',
  templateUrl: './dialog-add-ambito.component.html',
  styleUrls: ['./dialog-add-ambito.component.scss']
})
export class DialogAddAmbitoComponent implements OnInit {
  createAmbitoForm!: FormGroup;

  createAmbitoRequest: ProcessoAmbito = {
    ID: '',
    AMBITO: ''
  }

  constructor(
    private AmbitoService: AmbitoService,
    private router: Router,
    public dialogRef: MatDialogRef<DialogAddAmbitoComponent>,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.createAmbitoForm = new FormGroup({
      // ID: new FormControl('',),
      AMBITO: new FormControl('', [Validators.required])
    });
  }

  createAmbito() {
    console.log(this.createAmbitoForm.errors)
    if (this.createAmbitoForm.valid) {
      console.log("Valido")
      this.AmbitoService.createAmbito(this.createAmbitoRequest)
        .subscribe({
          next: (process) => {
            this.dialogRef.close();
            this.router.navigate(['gestao/ambito'])
          },
          error: (processError) => {
            console.log(processError)
          }
        });
    } else {
      console.log("Nao Valido")

    }

    return;
  }
}
