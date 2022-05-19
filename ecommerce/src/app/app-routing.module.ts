import { DeleteUsuarioComponent } from './View/cadastro/usuarios/delete-usuario/delete-usuario.component';
import { UpdateUsuarioComponent } from './View/cadastro/usuarios/update-usuario/update-usuario.component';
import { CreateUsuarioComponent } from './View/cadastro/usuarios/create-usuario/create-usuario.component';
import { ReadUsuarioComponent } from './View/cadastro/usuarios/read-usuario/read-usuario.component';
import { DeleteProdutoComponent } from './View/cadastro/produtos/delete-produto/delete-produto.component';
import { UpdateProdutoComponent } from './View/cadastro/produtos/update-produto/update-produto.component';
import { CreateProdutoComponent } from './View/cadastro/produtos/create-produto/create-produto.component';
import { ReadProdutoComponent } from './View/cadastro/produtos/read-produto/read-produto.component';
import { CadastroComponent } from './View/cadastro/cadastro.component';
import { HomeComponent } from './View/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "cadastro", component: CadastroComponent},

  {path: "produtos", component: ReadProdutoComponent},
  {path: "produtos/novo", component: CreateProdutoComponent},
  {path: "produtos/edit/:id", component: UpdateProdutoComponent},
  {path: "produtos/delet/:id", component: DeleteProdutoComponent},

  {path: "usuarios", component: ReadUsuarioComponent},
  {path: "usuarios/novo", component: CreateUsuarioComponent},
  {path: "usuarios/edit/:id", component: UpdateUsuarioComponent},
  {path: "usuarios/delet/:id", component: DeleteUsuarioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
