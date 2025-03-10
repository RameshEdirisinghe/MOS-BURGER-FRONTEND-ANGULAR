import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HttpClientModule],
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  searchQuery: string = '';
  customers: any[] = []; // Array to store customers fetched from the backend
  filteredCustomers: any[] = []; // Array to store filtered customers
  editRow: any = null; // Track the row being edited

  // New customer form data
  newCustomer = {
    customerName: '',
    phoneNumber: '',
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCustomers(); // Fetch customers from the backend when the component initializes
  }

  // Fetch all customers from the backend
  fetchCustomers() {
    this.http.get('http://localhost:8080/customer/all').subscribe(
      (response: any) => {
        this.customers = response;
        this.filteredCustomers = this.customers; // Initialize filteredCustomers
      },
      (error) => {
        console.error('Failed to fetch customers:', error);
      }
    );
  }

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
      this.http.post('http://localhost:8080/customer/add', this.newCustomer).subscribe(
        (response: any) => {
          this.fetchCustomers(); // Refresh the customer list after adding
          this.newCustomer = { customerName: '', phoneNumber: '' }; // Reset the form
        },
        (error) => {
          console.error('Failed to add customer:', error);
        }
      );
    }
  }

  // Start editing a row
  startEdit(customer: any) {
    this.editRow = { ...customer }; // Create a copy of the customer object
  }

  // Save edited row
  saveEdit(customer: any) {
    this.http.put('http://localhost:8080/customer/update', this.editRow).subscribe(
      (response: any) => {
        this.fetchCustomers(); // Refresh the customer list after updating
        this.editRow = null; // Exit edit mode
      },
      (error) => {
        console.error('Failed to update customer:', error);
      }
    );
  }

  // Cancel editing
  cancelEdit() {
    this.editRow = null; // Exit edit mode
  }

  // Delete customer
  deleteCustomer(customer: any) {
    this.http.delete(`http://localhost:8080/customer/delete/${customer.id}`).subscribe(
      (response: any) => {
        this.fetchCustomers(); // Refresh the customer list after deleting
      },
      (error) => {
        console.error('Failed to delete customer:', error);
      }
    );
  }
}