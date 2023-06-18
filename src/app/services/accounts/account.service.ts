import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BSynchroConts } from "src/app/bSynchro.const";
import { AccoutnCreateDto } from "./dtos/account-create.dto";

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    constructor(
        private http: HttpClient
    ) { }

    readonly BaseUrl = BSynchroConts.BaseURL

    CreateAccount(input: any) {
        return this.http.post(this.BaseUrl + 'Account', input);
    }
}
