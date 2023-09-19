import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [ {
  path: '',  
  component: HomeComponent,
  children: [
    { 
      path: 'bienvenido', 
      loadChildren: () => import('../../modules/bienvenido/bienvenido.module')
      .then(mod => mod.BienvenidoModule)
    },
    { 
      path: 'quiensoy', 
      loadChildren: () => import('../../modules/quien-soy/quien-soy.module')
      .then(mod => mod.QuienSoyModule)
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
