import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
        {
            path: 'dashboard',
            loadChildren: () => import('./modules/dashboard.module').then(m => m.DashboardModule)
        },
        {
            path: '**',
            redirectTo: '/dashboard'
        }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
