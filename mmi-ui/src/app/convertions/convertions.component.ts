import { Component, OnInit } from '@angular/core';
import { ImperialData } from './imperial.data';
import { MetricData } from './metric.data';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-convertions',
  templateUrl: './convertions.component.html',
  styleUrls: ['./convertions.component.css'],
  providers: [ImperialData, MetricData]
})
export class ConvertionsComponent implements OnInit {
  imperials: any;
  metrics: any;
  isMetric = false;
  result: any;

  constructor(private imperialData: ImperialData, private metricData: MetricData,
    private appService: AppService) { }

  ngOnInit() {
    this.imperialData.getImperialValue().subscribe(imperialDataResponse => {
      this.imperials = imperialDataResponse;
    });
    this.metricData.getMetricValue().subscribe((metricDataResponse) => {
      this.metrics = metricDataResponse;
    });
  }

  onMetric() {
    this.isMetric = true;
  }
  onImperial() {
    this.isMetric = false;
  }
  onSubmit(form: NgForm) {
    const num = form.value.number;
    const convFrom = form.value.convertionFrom;
    const convTo = form.value.convertionTo;

    this.appService.applyCovertion(num, convFrom, convTo).subscribe((res) => {
      console.log(res);
      this.result = res;
    });

  }

}
