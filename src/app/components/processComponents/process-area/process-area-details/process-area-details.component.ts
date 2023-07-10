import { Component, OnInit } from '@angular/core';
import { ProcessAreaComponent } from '../process-area.component';

@Component({
  selector: 'app-process-area-details',
  templateUrl: './process-area-details.component.html',
  styleUrls: ['./process-area-details.component.scss']
})
export class ProcessAreaDetailsComponent extends ProcessAreaComponent implements OnInit {}
