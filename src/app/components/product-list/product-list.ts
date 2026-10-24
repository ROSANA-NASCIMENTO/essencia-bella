import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';

@Component({
  imports: [ProductCard],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})

export class ProductList {
  produtos = [
    { id: 1, nome: 'Perfume de Rosas', preco: 89.90 },
    { id: 2, nome: 'Batom Rosa', preco: 79.90 },
    { id: 3, nome: 'Creme Hidratante', preco: 49.90 },
    { id: 4, nome: 'Sabonete Facial', preco: 24.90 }

  ];
}

