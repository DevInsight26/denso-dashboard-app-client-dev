import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistogramRoutingModule } from './histogram-routing.module';
import { HistogramComponent } from './histogram.component';
import { NgChartsModule } from 'ng2-charts';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HistogramComponent
  ],
  exports: [
    HistogramComponent
  ],
  imports: [
    CommonModule,
    HistogramRoutingModule,
    NgChartsModule,
    NgbDropdownModule
  ]
})
export class HistogramModule { }
