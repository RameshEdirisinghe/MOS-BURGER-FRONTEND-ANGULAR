import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ProductManagementComponent } from './page/dashboard/product/product.component';
import { PlaceOrderManagementComponent } from './page/dashboard/placeorder/placeorder.component';
import { ReportComponent } from './page/dashboard/report/report.component';


export const routes: Routes = [
    {
        path:"",
        component: PlaceOrderManagementComponent
    },
    {
        path:"login",
        component: LoginComponent
    },
    {
        path:"dashboard",
        component: DashboardComponent,

        children: [
            {
                path: "product",
                component: ProductManagementComponent
            },
            {
                path: "order",
                component: PlaceOrderManagementComponent
            },
            {
                path:"",
                component: ReportComponent
            }
        ]
    }
 
];
