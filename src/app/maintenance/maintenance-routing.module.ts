import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupMasterComponent } from './pages/group-master/group-master.component';

const routes: Routes = [
  { path: 'maintenance/group-master', component: GroupMasterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }
