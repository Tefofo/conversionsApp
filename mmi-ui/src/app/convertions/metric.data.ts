import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';

export class MetricData {

    metricData = [
        'Millimeters',
        'Meters'
    ];

    getMetricValue(): Observable<any> {
        return of(this.metricData);
    }
}

