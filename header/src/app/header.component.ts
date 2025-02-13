import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <h1>Header Component</h1>
      <nav>
        <a routerLink="/">Home</a>
        <a routerLink="/about">About</a>
      </nav>
    </header>
  `,
  styles: [`
    header {
      background-color: #f8f9fa;
      padding: 10px;
      text-align: center;
    }
    nav a {
      margin: 0 15px;
      text-decoration: none;
      color: #007bff;
    }
  `]
})
export class HeaderComponent { }