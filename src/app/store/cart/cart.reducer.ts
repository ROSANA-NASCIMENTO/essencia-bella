import { createReducer, on } from '@ngrx/store';
import { adicionarProduto, limparCarrinho, ItemCarrinho } from './cart.actions';

export interface CartState {
  itens: ItemCarrinho[];
}

export const initialCartState: CartState = {
  itens: []
};

export const cartReducer = createReducer(
  initialCartState,

  on(adicionarProduto, (state, { produto }) => ({
    ...state,
    itens: [...state.itens, produto]
  })),

  on(limparCarrinho, (state) => ({
    ...state,
    itens: []
  }))
);