import { ControleService } from './../../../../../services/controle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/models/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-usuario',
  templateUrl: './delete-usuario.component.html',
  styleUrls: ['./delete-usuario.component.css']
})
export class DeleteUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private controle: ControleService,
  ) { }

  ngOnInit(): void {
    const str = this.route.snapshot.paramMap.get("id");
    this.controle.buscarUsuarios(Number(str)).subscribe((usuario) => {
      this.usuario = usuario;
    });
  }

  excluirUsuario(){
    this.controle.deleteUsuarios(this.usuario.id).subscribe(() => {
      alert("Usuario deletado");
      this.router.navigate(['usuarios']);
    });
  }

}
