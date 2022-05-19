import { ControleService } from './../../../../../services/controle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/models/produto';

@Component({
  selector: 'app-delete-produto',
  templateUrl: './delete-produto.component.html',
  styleUrls: ['./delete-produto.component.css']
})
export class DeleteProdutoComponent implements OnInit {

  produto: Produto = new Produto();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private controle: ControleService,
  ) { }

  ngOnInit(): void {
    const str = this.route.snapshot.paramMap.get("id");
    this.controle.buscarProdutos(Number(str)).subscribe((produto) => {
      this.produto = produto;
    })
  }

  excluirProduto(){
    this.controle.deletarProdutos(this.produto.id).subscribe(() => {
      alert("o item será deletado");
      this.router.navigate(['produtos']);
    });
  }

}
