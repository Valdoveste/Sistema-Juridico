import { Component } from '@angular/core';

@Component({
  selector: 'app-process-create',
  templateUrl: './process-create.component.html',
  styleUrls: ['./process-create.component.scss']
})
export class ProcessCreateComponent {
  componentName: string = '';

  swapTabs(componentName: string): void {
    this.componentName = componentName;
  }
}
