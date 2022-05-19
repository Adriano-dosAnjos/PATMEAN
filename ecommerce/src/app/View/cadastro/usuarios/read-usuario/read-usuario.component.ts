import { CreateUsuarioComponent } from './../create-usuario/create-usuario.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ControleService } from './../../../../../services/controle.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/models/usuario';

@Component({
  selector: 'app-read-usuario',
  templateUrl: './read-usuario.component.html',
  styleUrls: ['./read-usuario.component.css']
})
export class ReadUsuarioComponent implements OnInit {

  usuario: Usuario[] = [];
  colunas: string[] = ['id', 'nome', 'email', 'tel', 'acoes']

  constructor(
    private controle: ControleService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.controle.listarUsuarios().subscribe(usuario => {
      console.log(usuario);
      this.usuario = usuario;
    });
  }

  abrirTelaNovoUsuario(): void{
    const dialogRef = this.dialog.open(CreateUsuarioComponent, {
      width: '60%', height: '80%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('fechando caixa');
    });

  }

}
