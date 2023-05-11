import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './pages/main/main.component';

import { AuthRoutingModule } from './auth-routing.module';
import { IngresarComponent } from './pages/ingresar/ingresar.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';



@NgModule({
  declarations: [
    MainComponent,
    IngresarComponent,
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
