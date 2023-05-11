import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: null },
    children: [
        {
            path: '',
            data: { breadcrumb: 'Inicio' },
            component: DashboardComponent
        },
        {
            path: '**',
            redirectTo: '',
        }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
