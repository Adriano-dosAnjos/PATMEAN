import { ControleService } from './../../../../../services/controle.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/models/produto';

@Component({
  selector: 'app-update-produto',
  templateUrl: './update-produto.component.html',
  styleUrls: ['./update-produto.component.css']
})
export class UpdateProdutoComponent implements OnInit {

  produto: Produto = new Produto();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private controle: ControleService
  ) { }

  ngOnInit(): void {
    const str = this.route.snapshot.paramMap.get("id");
    this.controle.buscarProdutos(Number(str)).subscribe((produto) => {
      this.produto = produto;
    });
  }

  novoProduto(){
    this.controle.atualizarProdutos(this.produto, this.produto.id).subscribe(() => {
      this.router.navigate(['produtos']);
    });
  }

  refresh(): void {
    window.location.reload();
  }

}
