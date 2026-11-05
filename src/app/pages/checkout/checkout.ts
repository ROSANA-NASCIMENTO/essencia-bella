import { Component, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { CartService } from '../../services/cart';
import { ItemCarrinho } from '../../store/cart/cart.actions';

@Component({
  imports: [CurrencyPipe, ReactiveFormsModule, RouterLink],
  selector: 'app-checkout',
  styleUrl: './checkout.css',
  templateUrl: './checkout.html',
})
export class Checkout {
  private cartService = inject(CartService);
  private fb = inject(FormBuilder);
  itensCarrinho = toSignal(this.cartService.itens$, { initialValue: [] as ItemCarrinho[] });
  pedidoConcluido = signal(false);
  formulario = this.fb.nonNullable.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    cep: ['', [Validators.required, Validators.pattern(/^\d{5}-?\d{3}$/)]],
    endereco: ['', Validators.required],
    numero: ['', Validators.required],
    complemento: [''],
    cidade: ['', Validators.required],
    estado: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]]
  });

  total(): number {
    return this.itensCarrinho().reduce((soma, item) => soma + item.preco, 0);
  }

  remover(indice: number): void {
    this.cartService.remover(indice);
  }

  limpar(): void {
    this.cartService.limpar();
  }

  finalizarPedido(): void {
    if (this.formulario.invalid || this.itensCarrinho().length === 0) {
      this.formulario.markAllAsTouched();
      return;
    }
    this.cartService.limpar();
    this.pedidoConcluido.set(true);
    this.formulario.reset();
  }
}
