import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from 'src/models/produto';
import { Usuario } from 'src/models/usuario';

@Injectable({
  providedIn: 'root'
})

export class ControleService {

  URLProduto = "http://localhost:3000/produtos";
  URLUsuario = "http://localhost:3000/usuarios";

  constructor(
    private http: HttpClient
  ){}

  criarProdutos(produto : Produto): Observable<any>{
    return this.http.post(this.URLProduto, produto);
  }

  listarProdutos(){
    return this.http.get<Produto[]>(this.URLProduto);
  }

  buscarProdutos(id: number): Observable<Produto>{
    return this.http.get<Produto>(this.URLProduto + "/" + id);
  }

  atualizarProdutos(produto : Produto, id : number) : Observable<any>{
    return this.http.put(this.URLProduto + "/" + id, produto);
  }

  deletarProdutos(id: number) : Observable<any>{
    return this.http.delete(this.URLProduto + "/" + id);
  }

  /*-------------------------Usuarios-------------------------*/

  criarUsuarios(usuario : Usuario): Observable<any>{
    return this.http.post(this.URLUsuario, usuario);
  }

  listarUsuarios(){
    return this.http.get<Usuario[]>(this.URLUsuario);
  }

  buscarUsuarios(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(this.URLUsuario + "/" + id);
  }

  atualizarUsuarios(usuario : Usuario, id: number) : Observable<any>{
    return this.http.put(this.URLUsuario + "/" + id, usuario);
  }

  deleteUsuarios(id: number) : Observable<any>{
    return this.http.delete(this.URLUsuario + "/" + id);
  }

}
