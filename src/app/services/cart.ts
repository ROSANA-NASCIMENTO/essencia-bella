import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItemCarrinho } from '../store/cart/cart.actions';

@Injectable({ providedIn: 'root' })
export class CartService {
  private itensSubject = new BehaviorSubject<ItemCarrinho[]>([]);
  itens$ = this.itensSubject.asObservable();

  adicionar(produto: ItemCarrinho): void {
    this.itensSubject.next([...this.itensSubject.value, produto]);
  }

  remover(indice: number): void {
    this.itensSubject.next(this.itensSubject.value.filter((_, i) => i !== indice));
  }

  limpar(): void {
    this.itensSubject.next([]);
  }
}
