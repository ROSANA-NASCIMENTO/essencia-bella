import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CurrencyPipe, TruncatePipe, RouterLink],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html', 
})
export class ProductCard {
  id = input<number>(0);
  nome = input<string>('Perfume Floral');
  preco = input<number>(89.90);
  imagem = input<string>('');
  descricao = input<string>('');
}
