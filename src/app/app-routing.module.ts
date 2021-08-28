import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PaginaNaoEncontradaComponent} from "./pagina-nao-encontrada/pagina-nao-encontrada.component";

const routes: Routes = [
  {path: 'parceiros', loadChildren: () => import('./parceiros/parceiros.module').then(m => m.ParceirosModule)},
  {path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
