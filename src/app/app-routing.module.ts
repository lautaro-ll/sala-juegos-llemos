import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./modules/home/home.module')
    .then(mod => mod.HomeModule)
  },
  { 
    path: 'login', 
    loadChildren: () => import('./modules/login/login.module')
    .then(mod => mod.LoginModule)
  },
  { 
    path: 'registro', 
    loadChildren: () => import('./modules/registro/registro.module')
    .then(mod => mod.RegistroModule)
  },
  { 
    path: '**', 
    loadChildren: () => import('./modules/error/error.module')
    .then(mod => mod.ErrorModule)
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
