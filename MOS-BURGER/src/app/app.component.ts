import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { PlaceOrderManagementComponent } from './page/dashboard/placeorder/placeorder.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,PlaceOrderManagementComponent],
  templateUrl: `./app.component.html` 
  
})
export class AppComponent implements OnInit {
  title = 'Mos Burger';

  ngOnInit(): void {
    initFlowbite();
  }
}