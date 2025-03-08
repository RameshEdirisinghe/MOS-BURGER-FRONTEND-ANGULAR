import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { ProductManagementComponent } from './page/dashboard/product/product.component';
import { OrderManagementComponent } from "./page/dashboard/order/order.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductManagementComponent, OrderManagementComponent],
  template: `
    <!-- <app-product-management></app-product-management> -->
    <app-order-management></app-order-management>
    
  `
})
export class AppComponent implements OnInit {
  title = 'Mos Burger';

  ngOnInit(): void {
    initFlowbite();
  }
}