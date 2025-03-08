import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  searchQuery: string = '';
  orders = [
    {
      orderId: '001',
      customerName: 'John Doe',
      totalAmount: 1200,
      receivedAmount: 1500,
      changeAmount: 300,
    },
    {
      orderId: '002',
      customerName: 'Jane Smith',
      totalAmount: 800,
      receivedAmount: 1000,
      changeAmount: 200,
    },
    {
      orderId: '003',
      customerName: 'Alice Johnson',
      totalAmount: 500,
      receivedAmount: 600,
      changeAmount: 100,
    },
  ];
  filteredOrders = this.orders;
  editRow: any = null; // Track the row being edited

  // Filter orders based on search query
  filterOrders() {
    if (this.searchQuery.trim() === '') {
      this.filteredOrders = this.orders;
    } else {
      this.filteredOrders = this.orders.filter((order) =>
        order.customerName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  // Start editing a row
  startEdit(order: any) {
    this.editRow = order;
  }

  // Save edited row
  saveEdit(order: any) {
    // Recalculate change amount
    order.changeAmount = order.receivedAmount - order.totalAmount;
    this.editRow = null; // Exit edit mode
  }

  // Cancel editing
  cancelEdit() {
    this.editRow = null; // Exit edit mode
  }

  // Delete order
  deleteOrder(order: any) {
    this.orders = this.orders.filter((o) => o.orderId !== order.orderId);
    this.filteredOrders = this.orders; // Update the filtered list
  }
}