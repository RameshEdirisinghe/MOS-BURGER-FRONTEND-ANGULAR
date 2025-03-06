import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductManagementComponent } from './product/product-management.component';
import { OrderManagementComponent } from "./order/order-management.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductManagementComponent, OrderManagementComponent],
  template: `
    <!-- <app-product-management></app-product-management> -->
    <app-order-management></app-order-management>
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