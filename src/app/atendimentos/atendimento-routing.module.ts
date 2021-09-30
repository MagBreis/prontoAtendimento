import { Routes } from "@angular/router";
import { ListarAtendimentoComponent } from "./listar-atendimento";
import { CadastrarAtendimentoComponent } from "./cadastrar-atendimento";
import { EditarAtendimentoComponent} from  './editar-atendimento';



export const AtendimentoRoutes: Routes = [
  {
    path: 'atendimentos',
    redirectTo : 'atendimento/listar'
  },
  {
    path:'atendimento/listar',
    component: ListarAtendimentoComponent
  },
  {
    path: 'atendimento/cadastrar',
    component: CadastrarAtendimentoComponent
  },
  {
    path:'atendimento/editar/id',
    component: EditarAtendimentoComponent
  }
  {
    path
  }
]
