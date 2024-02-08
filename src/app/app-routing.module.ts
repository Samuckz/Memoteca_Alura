import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarComponenteComponent } from './componentes/pensamentos/listar-componente/listar-componente.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  {
    path: "criarPensamento",
    component: CriarPensamentoComponent
  },
  {
    path: "listarPensamento",
    component: ListarComponenteComponent
  },
  {
    path: "",
    redirectTo: "listarPensamento",
    pathMatch: "full"
  },
  {
    path: "pensamentos/excluir-pensamento/:id",
    component: ExcluirPensamentoComponent
  },
  {
    path: "pensamentos/editar-pensamento/:id",
    component: EditarPensamentoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
