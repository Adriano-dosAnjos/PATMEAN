import { ControleService } from './../../../../../services/controle.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/models/produto';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-create-produto',
  templateUrl: './create-produto.component.html',
  styleUrls: ['./create-produto.component.css']
})


export class CreateProdutoComponent implements OnInit {

  produto : Produto = new Produto();

  constructor(
    private router: Router,
    private controle: ControleService,
    public dialogRef: MatDialogRef<CreateProdutoComponent>
  ) { }

  ngOnInit(): void {
  }

  novoProduto(): void{
    this.controle.criarProdutos(this.produto).subscribe(() => {
      this.refresh();
      this.voltar();
      this.router.navigate(['produtos']);
    })
  }

  voltar(): void {
    this.dialogRef.close();
  }

  refresh(): void {
    window.location.reload();
  }

}


