import { ChangeDetectorRef, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoginScreen: boolean = false;

  constructor(private router: Router, private _cdr: ChangeDetectorRef) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/login' || event.url === '/') {
          this.isLoginScreen = false;
        } else {
          this.isLoginScreen = true;
        }

        this._cdr.detectChanges();
      }
    });
  }
}
