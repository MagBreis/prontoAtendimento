import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtendimentoRoutes } from './atendimentos/atendimento-routing.module';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'atendimentos/listar',
    pathMatch: 'full'
},
...AtendimentoRoutes



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
