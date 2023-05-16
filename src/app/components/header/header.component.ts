import { Component } from '@angular/core';

import { ModalComponent } from '../modal/modal.component';
import { ModalService } from 'src/app/sevices/modal_servies';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(protected modalService: ModalService) { }
}
