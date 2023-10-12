import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { BootstrapModule } from '../bootstrap.module';

@NgModule({
  declarations: [

  ],
  exports: [
  ],
  imports: [
    PagesModule,
    CommonModule,
    BootstrapModule,
  ]
})
export class YamazumiModule { }
