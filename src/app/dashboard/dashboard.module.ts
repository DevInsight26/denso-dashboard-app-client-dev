import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { BootstrapModule } from '../bootstrap.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    declarations: [
        DashboardComponent,
    ],
    exports: [
        DashboardComponent,
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        BootstrapModule
    ]
})
export class DashboardModule { }
