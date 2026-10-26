import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

export const selectCartState =
  createFeatureSelector<CartState>('cart');

export const selectItensCarrinho = createSelector(
  selectCartState,
  (state) => state.itens
);

export const selectQuantItens = createSelector(
  selectCartState,
  (state) => state.itens.length
);