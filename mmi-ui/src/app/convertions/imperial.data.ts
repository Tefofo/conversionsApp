import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';

export class ImperialData {

    imperialData = [
        'Inches',
        'Feet',
        'Yards'
    ];

    getImperialValue(): Observable<any> {
        return of(this.imperialData);
    }
}

