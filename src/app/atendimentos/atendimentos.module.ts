import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtendimentoService } from './shared';
import { ListarAtendimentoComponent } from './listar-atendimento';



@NgModule({
  declarations: [
    ListarAtendimentoComponent
  ],
  imports: [
    CommonModule,

  ],

  providers:[
    AtendimentoService
  ]


})
export class AtendimentosModule { }
