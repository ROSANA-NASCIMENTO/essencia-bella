import { createAction, props } from '@ngrx/store';

export interface ItemCarrinho {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
  descricao: string;
}

export const adicionarProduto = createAction(
  '[Carrinho] Adicionar Produto',
  props<{ produto: ItemCarrinho }>()
);

export const limparCarrinho = createAction(
  '[Carrinho] Limpar Carrinho'
);