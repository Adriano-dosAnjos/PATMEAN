import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ControleService } from './../../../../../services/controle.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/models/usuario';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.css']
})
export class CreateUsuarioComponent implements OnInit {

  usuario : Usuario = new Usuario();

  constructor(
    private router: Router,
    private controle: ControleService,
    public dialogRef: MatDialogRef<CreateUsuarioComponent>
  ) { }

  ngOnInit(): void {
  }

  novoUsuario(): void{
    this.controle.criarUsuarios(this.usuario).subscribe(() => {
      this.refresh();
      this.voltar();
      this.router.navigate(['usuarios']);
    })
  }

  voltar(): void {
    this.dialogRef.close();
  }

  refresh(): void {
    window.location.reload();
  }

}
