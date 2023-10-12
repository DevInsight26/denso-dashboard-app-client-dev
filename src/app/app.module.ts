import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapModule } from './bootstrap.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { NgChartsModule } from 'ng2-charts';
import { LayoutComponent } from './shared/layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { YamazumiModule } from './yamazumi/yamazumi.module';
import { HistogramComponent } from './histogram/histogram.component';
import { HistogramModule } from './histogram/histogram.module';
@NgModule({
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BootstrapModule,
        DashboardModule,
        YamazumiModule,
        LoginModule,
        NgChartsModule,
        SharedModule,
        HistogramModule
    ],
})
export class AppModule {}
