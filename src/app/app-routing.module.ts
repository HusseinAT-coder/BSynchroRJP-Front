import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './components/pages/customer/customer.component';
import { AccountComponent } from './components/pages/account/account.component';

const routes: Routes = [
    // { path: 'error', component: ErrorComponent },
    { path: 'account/:id', component: AccountComponent },
    { path: 'customers', component: CustomerComponent },
    { path: '**', component: CustomerComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }