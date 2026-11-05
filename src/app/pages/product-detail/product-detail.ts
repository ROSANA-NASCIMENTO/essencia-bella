import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../services/product';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { CartService } from '../../services/cart';

interface ProdutoDetalhe {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
}

@Component({
  imports: [CurrencyPipe, UpperCasePipe, RouterLink],
  selector: 'app-product-detail',
  styleUrl: './product-detail.css',
  templateUrl: './product-detail.html',
})
export class ProductDetail {
  produto = signal<ProdutoDetalhe | null>(null);
  erro = signal(false);
  private route = inject(ActivatedRoute);
  private productService = inject(Product);
  private cartService = inject(CartService);

  adicionarAoCarrinho(): void {
    const produto = this.produto();
    if (!produto) return;

    this.cartService.adicionar({
      id: produto.id,
      nome: produto.title,
      preco: produto.price,
      imagem: produto.thumbnail,
      descricao: produto.description
    });
  }

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id > 0) {
      this.productService.buscarProdutoPorId(id).subscribe({
        next: resposta => {
          const produto = resposta as ProdutoDetalhe;
          this.produto.set({
            ...produto,
            title: this.productService.traduzirNome(produto.title),
            description: this.productService.traduzirDescricao(produto.title)
          });
        },
        error: () => this.erro.set(true)
      });
    } else {
      this.erro.set(true);
    }
  }
}
