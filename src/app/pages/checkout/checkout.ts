import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectItensCarrinho } from '../../store/cart/cart.selectors';

@Component({
  imports: [],
  selector: 'app-checkout',
  styleUrl: './checkout.css',
  templateUrl: './checkout.html',
})
export class Checkout {
  private store = inject(Store);

  itensCarrinho = this.store.selectSignal(selectItensCarrinho);
}
