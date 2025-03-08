import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ProductManagementComponent } from './page/dashboard/product/product.component';
import { OrderManagementComponent } from './page/dashboard/order/order.component';
import { ReportComponent } from './page/dashboard/report/report.component';
import { PlaceorderComponent } from './page/placeorder/placeorder.component';

export const routes: Routes = [
    {
        path:"",
        component: LoginComponent
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
                component: OrderManagementComponent
            },
            {
                path:"",
                component: ReportComponent
            }
        ]
    },
    {
        path:"placeholder",
        component: PlaceorderComponent
    }
];
