import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { DropdownComponent } from './ui/dropdown/dropdown.component';
import { BootstrapModule } from '../bootstrap.module';



@NgModule({
  declarations: [
    DropdownComponent
  ],
  exports: [
    LayoutModule,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    BootstrapModule
  ]
})
export class SharedModule { }
