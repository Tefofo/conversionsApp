import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class AppService {

    constructor(private http: HttpClient) { }


    applyCovertion(num: any, convFrom: any, convTo: any) {
        const requestData = {
            unitFrom: convFrom,
            unitTo: convTo,
            number: num
        };
        return this.http.post('http://localhost:8080/api/convert', requestData)
        .map((response: Response) => {
            const value = response;
            return value;
        }).catch(() => 'Unable to convert...');
    }
}
