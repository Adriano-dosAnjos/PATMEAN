import { ControleService } from './../../../services/controle.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/models/produto';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  produtos : Produto[] = [];
  URLProdutoFoto : string = "http://localhost:3000/fotos/";

  constructor(
    private controle: ControleService
  ) { }

  ngOnInit(): void {
    this.controle.listarProdutos().subscribe(produtos => {
      this.produtos = produtos;
    });
  }

}
