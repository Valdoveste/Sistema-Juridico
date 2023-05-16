import { Component } from '@angular/core';

import { ModalService } from './sevices/modal_servies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sistema-Juridico';
  bodyText = 'This text can be updated in modal 1';
  constructor(protected modalService: ModalService) { }
}
