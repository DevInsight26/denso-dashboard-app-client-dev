import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './layout.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    LayoutComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
