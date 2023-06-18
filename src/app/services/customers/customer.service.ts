import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BSynchroConts } from "src/app/bSynchro.const";
import { CustomerListDto } from "./dtos/customer-list.dto";

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    constructor(
        private http: HttpClient
    ) { }

    readonly BaseUrl = BSynchroConts.BaseURL

    // postMovie(movie: createmovie): Observable<any> {
    //     return this.http.post(this.BaseUrl, movie);
    // }

    GetCustomers() {
        return this.http.get<CustomerListDto[]>(this.BaseUrl + 'Customer')
    }
}
