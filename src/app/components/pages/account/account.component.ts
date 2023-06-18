import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/accounts/account.service';
import { AccoutnCreateDto } from 'src/app/services/accounts/dtos/account-create.dto';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  constructor(
    private rout: ActivatedRoute,
    private readonly _accountService: AccountService
  ) { }

  credit: number = 0
  customerId: string | null;

  ngOnInit(): void {
    this.customerId = this.rout.snapshot.paramMap.get('id');
  }

  async Create() {

    this._accountService.CreateAccount({
      customerId: this.customerId,
      initialCredit: this.credit
    }).subscribe(
      () => {
        console.log('Account created successfully');
      }
    );

    console.log('done')
  }
}
