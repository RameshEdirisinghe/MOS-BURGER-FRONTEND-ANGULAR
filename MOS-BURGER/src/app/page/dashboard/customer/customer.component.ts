import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent {
  searchQuery: string = '';
  customers = [
    {
      customerId: '001',
      customerName: 'John Doe',
      phoneNumber: '123-456-7890',
    },
    {
      customerId: '002',
      customerName: 'Jane Smith',
      phoneNumber: '987-654-3210',
    },
    {
      customerId: '003',
      customerName: 'Alice Johnson',
      phoneNumber: '555-555-5555',
    },
  ];
  filteredCustomers = this.customers;
  editRow: any = null; // Track the row being edited

  // New customer form data
  newCustomer = {
    customerName: '',
    phoneNumber: '',
  };

  // Filter customers based on search query
  filterCustomers() {
    if (this.searchQuery.trim() === '') {
      this.filteredCustomers = this.customers;
    } else {
      this.filteredCustomers = this.customers.filter((customer) =>
        customer.customerName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  // Add a new customer
  addCustomer() {
    if (this.newCustomer.customerName && this.newCustomer.phoneNumber) {
      const newCustomer = {
        customerId: (this.customers.length + 1).toString().padStart(3, '0'), // Generate a new ID
        customerName: this.newCustomer.customerName,
        phoneNumber: this.newCustomer.phoneNumber,
      };
      this.customers.push(newCustomer);
      this.filteredCustomers = this.customers; // Update the filtered list
      this.newCustomer = { customerName: '', phoneNumber: '' }; // Reset the form
    }
  }

  // Start editing a row
  startEdit(customer: any) {
    this.editRow = customer;
  }

  // Save edited row
  saveEdit(customer: any) {
    this.editRow = null; // Exit edit mode
  }

  // Cancel editing
  cancelEdit() {
    this.editRow = null; // Exit edit mode
  }

  // Delete customer
  deleteCustomer(customer: any) {
    this.customers = this.customers.filter((c) => c.customerId !== customer.customerId);
    this.filteredCustomers = this.customers; // Update the filtered list
  }
}