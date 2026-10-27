import { Component, inject, signal } from '@angular/core';  
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../services/product';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { adicionarProduto } from '../../store/cart/cart.actions'; 
import { selectItensCarrinho } from '../../store/cart/cart.selectors';
import { take } from 'rxjs';
import { RouterLink } from '@angular/router'; 

@Component({
  imports: [CurrencyPipe, UpperCasePipe, RouterLink],
  selector: 'app-product-detail',
  styleUrl: './product-detail.css',
  templateUrl: './product-detail.html',
})
export class ProductDetail


{
  produto = signal<any>(null);

  private route = inject(ActivatedRoute);

  private productService = inject(Product);
  private store = inject(Store);

  id = this.route.snapshot.paramMap.get('id');

  constructor() {
    if (this.id !== null) {
      this.productService
        .buscarProdutoPorId(Number(this.id))
        .subscribe(produto => {
  this.produto.set(produto);
  console.log(this.produto());
});      
    }
  }

  adicionarAoCarrinho() {
  console.log('Botão Adicionar ao carrinho foi clicado!');

  const p = this.produto();

  if (p) {
    this.store.dispatch(adicionarProduto({
      produto: {
        id: p.id,
        nome: p.title,
        preco: p.price,
        imagem: p.thumbnail,
        descricao: p.description
      }
    }));

    console.log('Produto enviado ao NgRx:', p.title);
    this.store.select(selectItensCarrinho).pipe(take(1)).subscribe(itens => {
  console.log('Produtos armazenados no carrinho:', itens);
});
  }}}