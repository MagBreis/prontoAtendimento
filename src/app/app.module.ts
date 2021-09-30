import { AtendimentosModule } from './atendimentos/atendimentos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastrarAtendimentoComponent } from './atendimentos/cadastrar-atendimento/cadastrar-atendimento.component';

@NgModule({
  // COMPONENTS
  declarations: [
    AppComponent,
    CadastrarAtendimentoComponent
  ],
  // MODEL
  imports: [
    BrowserModule,
    AtendimentosModule
  ],
  // SERVICES
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
