import { Injectable } from '@angular/core';
import { Atendimento } from './atendimento.model';

@Injectable()

export class AtendimentoService {

  constructor() { }

  ListarTodos(): Atendimento[]{
    const atendimentos = localStorage['atendimentos'];
    return atendimentos ? JSON.parse(atendimentos) : [];
  }
  cadastrar(atendimento:Atendimento):void {
    const atendimentos = this.ListarTodos();
    atendimentos.id = new Date().getTime();
    atendimento.push(atendimento);
    localStorage['atendimentos'] = JSON.stringify(atendimentos);

  }

  buscarPorId(id:number):Atendimento {
    const atendimentos : Atendimento[] = this.ListarTodos();
    return atendimentos.find(atendimento => atendimento.id === id);
  }

  atualizar(atendimento: Atendimento): void {
    const atendimentos : Atendimento[] = this.ListarTodos();
    atendimentos.forEach((obj, index, objs)=>{
      if( atendimento.id === obj.id){
        objs[index] = atendimento;
      }
    });
    localStorage['atendimento'] = JSON.stringify(atendimentos );
  }

  remover(id:number):void {
    let atendimentos : Atendimento[] = this.ListarTodos();
    atendimentos = atendimentos.filter(atendimentos => atendimentos.id !==id);
    localStorage['atendimentos'] = JSON.stringify(atendimentos);
  }

  alterarStatus(id : number):void {
    const atendimentos : Atendimento[] = this.ListarTodos();
    atendimentos.forEach((obj, index, objs)=>{
      if(id === obj.id){
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['atendimentos'] = JSON.stringify(atendimentos);
  }



}
