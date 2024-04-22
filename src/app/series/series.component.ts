import { Component, OnInit } from '@angular/core';
import { Series } from './series';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  
  constructor(private seriesService: SeriesService) { }
  series: Array<Series> = [];
  average: number = 0;

  getSeries() {
    this.seriesService.getSeries().subscribe(series => {
      this.series = series;
      this.seriesService.getAverage(this.series).subscribe(average => {
        this.average = average;
      });
    });
  }


  ngOnInit() {
    this.getSeries();
  }

}