import { AtendimentoService } from './../shared/atendimento.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AtendimentoService, Atendimento } from '../shared';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cadastrar-atendimento',
  templateUrl: './cadastrar-atendimento.component.html',
  styleUrls: ['./cadastrar-atendimento.component.css']
})
export class CadastrarAtendimentoComponent implements OnInit {
@ViewChild ('formAtendimento',{ Static: true}) fornmAtendimento : NgForm;
atendimento : Atendimento



  constructor(privaite AtendimentoService : AtendimentoService, private router : Routerr) { }

  ngOnInit(): void {
    this.atendimento = new Atendimento();
  }

  cadastrar ():void {
    if(this.fornmAtendimento.form.valid){
      this.AtendimentoService.cadastrar(this.tarefa);
      this.router.navigate([/atendimentos]);
    }

  }


}
