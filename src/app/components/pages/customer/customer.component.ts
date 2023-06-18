import { Component } from '@angular/core';
import { CustomerService } from '../../../../app/services/customers/customer.service';
import { CustomerListDto } from 'src/app/services/customers/dtos/customer-list.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  list: CustomerListDto[];

  constructor(
    private readonly _customerService: CustomerService,
    private readonly router: Router
  ) { }

  async ngOnInit() {

    try {
      this.list = await new Promise<CustomerListDto[]>((resolve, reject) => {
        this._customerService.GetCustomers().subscribe(
          (res: CustomerListDto[]) => {
            resolve(res);
          },
          (error) => {
            reject(error);
          }
        );
      });

      console.log(this.list);

    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  Redirect(id:string) {
    this.router.navigate(['/account',id]);
  }
}
