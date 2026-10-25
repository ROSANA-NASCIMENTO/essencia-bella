
import { Component, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../services/product';

@Component({
  imports: [ProductCard],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {

 produtos = signal<{ id: number; nome: string; preco: number }[]>([]);

  constructor(private productService: Product) {

    this.productService.buscarProdutos().subscribe((resposta) => {
      const dados = resposta as {
        products: {
          id: number;
          title: string;
          price: number;
        }[];
      };

      const cosmeticos = dados.products.map((produto) => ({
        id: produto.id,
        nome: produto.title,
        preco: produto.price
      }));

      this.produtos.update(atuais => [...atuais, ...cosmeticos]);
    });

    this.productService.buscarPerfumes().subscribe((resposta) => {
      const dados = resposta as {
        products: {
          id: number;
          title: string;
          price: number;
        }[];
      };

      const perfumes = dados.products.map((produto) => ({
        id: produto.id,
        nome: produto.title,
        preco: produto.price
      }));

      this.produtos.update(atuais => [...atuais, ...perfumes]);
    });

  }

}
