import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociateComponent } from './yamazumi/pages/associate/associate.component';

const routes: Routes = [{ path: 'yamazumi/associate', component: AssociateComponent }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
