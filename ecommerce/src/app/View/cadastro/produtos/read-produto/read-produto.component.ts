
import { CreateProdutoComponent } from './../create-produto/create-produto.component';
import { ControleService } from './../../../../../services/controle.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produto } from 'src/models/produto';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-read-produto',
  templateUrl: './read-produto.component.html',
  styleUrls: ['./read-produto.component.css']
})
export class ReadProdutoComponent implements OnInit {

  produto: Produto[] = [];
  colunas: string[] = ['id', 'item', 'categoria', 'desc', 'valor', 'acoes'];


  constructor(
    private controle: ControleService,
    public dialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer
  ) { }

  ngOnInit(): void {
    this.controle.listarProdutos().subscribe(produto =>{
      console.log(produto);
      this.produto = produto;
    });
  }

  abrirTelaNovoProduto(): void{
    const dialogRef = this.dialog.open(CreateProdutoComponent, {
      width: '60%', height: '80%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('fechando caixa');
    });

  }

}
