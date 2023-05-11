import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main/main.component';

//Nuevos
import { IngresarComponent } from './pages/ingresar/ingresar.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';

const routesAuth: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'ingresar',
        component: IngresarComponent,
        pathMatch: 'full',
      },
      {
        path: 'registrar',
        component: RegistrarComponent,
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'ingresar',
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routesAuth)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
