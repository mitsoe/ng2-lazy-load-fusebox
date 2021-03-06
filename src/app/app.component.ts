import { AppRoutingModule } from './app-routing.module';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Angular Router</h1>
    <nav>
      <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
      <a (click)="getApp('novaModule.js')" routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a (click)="getApp('woModule.js')" routerLink="/t" routerLinkActive="active">woModule</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(public router: AppRoutingModule) { }

  public getApp(aModule: string) {
    return this.router.loadAngularModule(aModule);
  }
}