import { ControleService } from './../../../../../services/controle.service';
import { Usuario } from 'src/models/usuario';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-usuario',
  templateUrl: './update-usuario.component.html',
  styleUrls: ['./update-usuario.component.css']
})
export class UpdateUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private controle: ControleService,
  ) { }

  ngOnInit(): void {
    const str = this.route.snapshot.paramMap.get("id");
    this.controle.buscarUsuarios(Number(str)).subscribe((usuario) =>{
      this.usuario = usuario;
    });
  }

  novoUsuario(){
    this.controle.atualizarUsuarios(this.usuario, this.usuario.id).subscribe(() => {
      this.router.navigate(['usuarios']);
    });
  }


}
