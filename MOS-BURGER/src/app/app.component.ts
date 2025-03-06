import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductManagementComponent } from './product/product-management.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductManagementComponent],
  template: `
    <app-product-management></app-product-management>
    <router-outlet />
  `,
  styles: [
    `
      div {
        padding: 20px;
      }
    `,
  ],
})
export class AppComponent {}