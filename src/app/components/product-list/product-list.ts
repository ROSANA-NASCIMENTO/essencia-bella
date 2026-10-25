
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

 produtos = signal<{
  id: number;
  nome: string;
  preco: number;
  imagem: string;
  descricao: string;
}[]>([]);

  constructor(private productService: Product) {

    this.productService.buscarProdutos().subscribe((resposta) => {
      const dados = resposta as {
        products: {
          id: number;
          title: string;
          price: number;
          thumbnail: string;
          description: string;
        }[];
      };

      const cosmeticos = dados.products
  .filter((produto) => produto.title !== 'Powder Canister')
  .map((produto) => ({
        id: produto.id,
        nome: produto.title,
        preco: produto.price,
        imagem: produto.thumbnail,
        descricao: produto.description      
      }));

      this.produtos.update(atuais => [...cosmeticos, ...atuais]);
    });

    this.productService.buscarPerfumes().subscribe((resposta) => {
      const dados = resposta as {
        products: {
          id: number;
          title: string;
          price: number;
          thumbnail: string;
          description: string;
        }[];
      };

      const perfumes = dados.products.map((produto) => ({
        id: produto.id,
        nome: produto.title,
        preco: produto.price,
        imagem: produto.thumbnail,
        descricao: produto.description
      }));

      this.produtos.update(atuais => [...atuais, ...perfumes]);
    });

  

  this.productService.buscarCuidadosPele().subscribe((resposta) => {

  const dados = resposta as {
    products: {
      id: number;
      title: string;
      price: number;
      thumbnail: string;
      description: string;
    }[];
  };

  const olay = dados.products
    .filter((produto) =>
      produto.title === 'Olay Ultra Moisture Shea Butter Body Wash'
    )
    .map((produto) => ({
      id: produto.id,
      nome: produto.title,
      preco: produto.price,
      imagem: produto.thumbnail,
      descricao: produto.description
    }));

  this.produtos.update(atuais => [...olay, ...atuais]);

});

}}
