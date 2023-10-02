import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [ {
  path: '',  
  component: HomeComponent,
  children: [
    { 
      path: '', 
      loadChildren: () => import('../../modules/bienvenido/bienvenido.module')
      .then(mod => mod.BienvenidoModule)
    },
    { 
      path: 'quiensoy', 
      loadChildren: () => import('../../modules/quien-soy/quien-soy.module')
      .then(mod => mod.QuienSoyModule)
    },
    { 
      path: 'ahorcado', 
      loadChildren: () => import('../../modules/ahorcado/ahorcado.module')
      .then(mod => mod.AhorcadoModule)
    },
    { 
      path: 'mayor-o-menor', 
      loadChildren: () => import('../../modules/mayor-o-menor/mayor-o-menor.module')
      .then(mod => mod.MayorOMenorModule)
    },
    { 
      path: 'preguntados', 
      loadChildren: () => import('../../modules/preguntados/preguntados.module')
      .then(mod => mod.PreguntadosModule)
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
