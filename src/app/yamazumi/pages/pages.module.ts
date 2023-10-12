import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssociateComponent } from './associate/associate.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { BootstrapModule } from 'src/app/bootstrap.module';
import { NgbDropdown, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    ComparisonComponent,
  ],
  exports: [
    ComparisonComponent,
  ],
  imports: [
    CommonModule,
    NgbDropdownModule,
  ]
})
export class PagesModule { }
