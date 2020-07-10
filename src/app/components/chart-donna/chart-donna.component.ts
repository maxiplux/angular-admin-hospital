import {Component, Input, OnInit} from '@angular/core';
import {Label, MultiDataSet} from 'ng2-charts';
import {ChartType} from 'chart.js';

@Component({
  selector: 'app-chart-donna',
  templateUrl: './chart-donna.component.html',
  styleUrls: ['./chart-donna.component.css']
})
export class ChartDonnaComponent implements OnInit {

  constructor() { }

  // Doughnut

  @Input() chartLabels: Label[]  ;
  @Input() chartData: MultiDataSet ;

  @Input() chartType: ChartType ;



  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


  ngOnInit(): void {
    console.log(`${this.chartData} --- ${this.chartLabels} --------------------> ${this.chartType}`)

  }

}
