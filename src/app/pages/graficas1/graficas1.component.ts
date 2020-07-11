import {Component, OnInit} from '@angular/core';

import {ChartType} from 'chart.js';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {

  // Doughnut
  public chartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public chartData = [[350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];

  public chartType: ChartType = 'doughnut';

  constructor() {
  }

  ngOnInit(): void {
  }


}
