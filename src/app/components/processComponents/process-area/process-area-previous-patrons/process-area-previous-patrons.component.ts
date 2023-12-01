import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProcessoPatronosAnteriors } from 'src/app/models/PROCESSO_PATRONOS_ANTERIORES';
import { PatronoAnteriorService } from 'src/app/services/patrono-anterior.service';

@Component({
  selector: 'app-process-area-previous-patrons',
  templateUrl: './process-area-previous-patrons.component.html',
  styleUrls: ['./process-area-previous-patrons.component.scss']
})
export class ProcessAreaPreviousPatronsComponent implements OnInit {

  constructor(
    private patronoAlteriorService: PatronoAnteriorService,
    private ActivatedRouter: ActivatedRoute
  ) { }

  patronosAlteriores: ProcessoPatronosAnteriors[] = [];

  ngOnInit(): void { this.loadPatronosAnteriores(); }

  loadPatronosAnteriores() {
    this.ActivatedRouter.paramMap
      .subscribe({
        next: (parms) => {
          const ID_PROCESSO = parms.get('id');
          if (ID_PROCESSO) {
            this.patronoAlteriorService.getProcessoPatronoAnterior(ID_PROCESSO)
              .subscribe({
                next: (response: ProcessoPatronosAnteriors[]) => {
                  this.patronosAlteriores = response;
                },
                error: (err: HttpErrorResponse) => console.log(err)
              });
          }
        }
      });
  }
}
