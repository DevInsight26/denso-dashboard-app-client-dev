import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapModule } from '../bootstrap.module';
import { NgChartsModule } from 'ng2-charts';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AssociateComponent } from './pages/associate/associate.component';
import { ComparisonComponent } from './pages/comparison/comparison.component';

@NgModule({
  declarations: [
    AssociateComponent,
    ComparisonComponent
  ],
  exports: [
    AssociateComponent,
    ComparisonComponent
  ],
  imports: [
    CommonModule,
    BootstrapModule,
    NgbDropdownModule,
    NgChartsModule
  ]
})
export class YamazumiModule { }
