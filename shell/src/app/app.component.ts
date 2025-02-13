import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header-component></header-component>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Micro Frontend Shell';
}