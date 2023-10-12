import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartConfiguration } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-associate',
  standalone: true,
  imports: [NgbDropdownModule, NgChartsModule],
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.scss']
})
export class AssociateComponent {
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
      labels: [ '04/30/23 (Mon)', '05/01/23 (Tue)', '05/02/23 (Wed)', '05/03/23 (Thu)', '05/04/23 (Fri)', '05/05/23 (Sat)', '05/06/23 (Sun)', '05/07/23 (Mon)', '05/08/23 (Tue)', '05/09/23 (Wed)' ],
      datasets: [
          { data: [ 200, 104, 348, 81, 56, 100, 40, 90,203, 501 ], label: 'Actual' },
          { data: [ 189, 102, 321, 90, 44, 90, 40, 90, 251, 401 ], label: 'Standard' }
      ]
  };
}
