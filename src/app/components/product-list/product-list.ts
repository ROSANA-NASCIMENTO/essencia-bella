import { Component, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../services/product';
import { CartService } from '../../services/cart';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { combineLatest, map, startWith } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

interface ProdutoVitrine {
  id: number; nome: string; preco: number; imagem: string; descricao: string;
}
interface ProdutoApi {
  id: number; title: string; price: number; thumbnail: string; description: string;
}
interface RespostaApi { products: ProdutoApi[]; }

@Component({
  imports: [ProductCard, ReactiveFormsModule],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  produtos = signal<ProdutoVitrine[]>([]);
  busca = new FormControl('', { nonNullable: true });
  produtosFiltrados = toSignal(
    combineLatest([
      toObservable(this.produtos),
      this.busca.valueChanges.pipe(startWith(this.busca.value))
    ]).pipe(map(([produtos, termo]) =>
      produtos.filter(p => p.nome.toLocaleLowerCase('pt-BR').includes(termo.trim().toLocaleLowerCase('pt-BR')))
    )), { initialValue: [] as ProdutoVitrine[] }
  );
  carregando = signal(true);
  erro = signal(false);
  private cosmeticos: ProdutoVitrine[] = [];
  private perfumes: ProdutoVitrine[] = [];
  private cuidadosPele: ProdutoVitrine[] = [];
  private terminouCosmeticos = false;
  private terminouPerfumes = false;
  private terminouCuidadosPele = false;

  constructor(private productService: Product, private cartService: CartService) {
    this.productService.buscarProdutos().subscribe({
      next: (resposta) => {
        this.cosmeticos = (resposta as RespostaApi).products
          .filter(p => p.title !== 'Powder Canister')
          .slice(0, 4).map(p => this.converter(p));
        this.terminouCosmeticos = true;
        this.atualizar();
      },
      error: () => { this.erro.set(true); this.terminouCosmeticos = true; this.atualizar(); }
    });
    this.productService.buscarPerfumes().subscribe({
      next: (resposta) => {
        this.perfumes = (resposta as RespostaApi).products
          .slice(0, 5).map(p => this.converter(p));
        this.terminouPerfumes = true;
        this.atualizar();
      },
      error: () => { this.erro.set(true); this.terminouPerfumes = true; this.atualizar(); }
    });
    this.productService.buscarCuidadosPele().subscribe({
      next: (resposta) => {
        this.cuidadosPele = (resposta as RespostaApi).products
          .filter(p => p.title === 'Olay Ultra Moisture Shea Butter Body Wash')
          .map(p => this.converter(p));
        this.terminouCuidadosPele = true;
        this.atualizar();
      },
      error: () => {
        this.erro.set(true);
        this.terminouCuidadosPele = true;
        this.atualizar();
      }
    });
  }

  adicionarAoCarrinho(produto: ProdutoVitrine): void {
    this.cartService.adicionar(produto);
  }

  private converter(p: ProdutoApi): ProdutoVitrine {
    return {
      id: p.id,
      nome: this.productService.traduzirNome(p.title),
      preco: p.price,
      imagem: p.thumbnail,
      descricao: this.productService.traduzirDescricao(p.title)
    };
  }


  private atualizar(): void {
    this.produtos.set([...this.cosmeticos, ...this.cuidadosPele, ...this.perfumes]);
    this.carregando.set(!(this.terminouCosmeticos && this.terminouPerfumes && this.terminouCuidadosPele));
  }
}
