import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class Product {
  constructor(private http: HttpClient) {}

  buscarProdutos() {
    return this.http.get(
      'https://dummyjson.com/products/category/beauty'
    );}

  buscarPerfumes() {
    return this.http.get(
      'https://dummyjson.com/products/category/fragrances'
    );}

  buscarCuidadosPele() {
  return this.http.get(
    'https://dummyjson.com/products/category/skin-care'
  );
}

buscarProdutoPorId(id: number) {
  return this.http.get(
    `https://dummyjson.com/products/${id}`
  );
}
traduzirNome(nome: string): string {
  const nomes: Record<string, string> = {
    'Essence Mascara Lash Princess': 'Máscara de Cílios Lash Princess',
    'Eyeshadow Palette with Mirror': 'Paleta de Sombras com Espelho',
    'Powder Canister': 'Pó Facial',
    'Red Lipstick': 'Batom Vermelho',
    'Red Nail Polish': 'Esmalte Vermelho',
    'Olay Ultra Moisture Shea Butter Body Wash': 'Sabonete Líquido Olay',
    'Calvin Klein CK One': 'Perfume Calvin Klein CK One',
    'Chanel Coco Noir Eau De': 'Perfume Chanel Coco Noir',
    'Dior J’adore': 'Perfume Dior J’adore',
    'Dolce Shine Eau de': 'Perfume Dolce Shine',
    'Gucci Bloom Eau de': 'Perfume Gucci Bloom'
  };

  return nomes[nome] ?? nome;
}


  traduzirDescricao(nome: string): string {
    const descricoes: Record<string, string> = {
      'Essence Mascara Lash Princess': 'A Máscara de Cílios Lash Princess da Essence proporciona volume e alongamento aos cílios, ajudando a destacar o olhar. Sua escova facilita a aplicação e a distribuição do produto para um acabamento marcante.',
      'Eyeshadow Palette with Mirror': 'A Paleta de Sombras com Espelho reúne diferentes tonalidades para criar maquiagens do dia a dia ou produções especiais. O espelho integrado facilita os retoques e torna o produto prático para levar na bolsa.',
      'Red Lipstick': 'O Batom Vermelho oferece uma cor intensa para destacar os lábios e complementar diferentes estilos de maquiagem. É uma opção versátil para ocasiões especiais ou para dar mais personalidade ao visual.',
      'Red Nail Polish': 'O Esmalte Vermelho proporciona uma tonalidade clássica e vibrante para as unhas. Ideal para completar a manicure com um acabamento elegante e combinar com diferentes ocasiões.',
      'Olay Ultra Moisture Shea Butter Body Wash': 'O Sabonete Líquido Olay com manteiga de karité foi desenvolvido para a limpeza diária do corpo. Sua fórmula ajuda a deixar a pele com sensação de maciez e conforto durante o banho.',
      'Calvin Klein CK One': 'O Perfume Calvin Klein CK One apresenta uma fragrância fresca e versátil, com proposta leve e moderna. É uma escolha para quem prefere um aroma agradável e discreto no dia a dia.',
      'Chanel Coco Noir Eau De': 'O Perfume Chanel Coco Noir combina uma proposta sofisticada com notas de caráter floral e amadeirado. Sua fragrância marcante é indicada para quem aprecia perfumes elegantes.',
      'Dior J’adore': 'O Perfume Dior J’adore destaca uma composição floral elegante e feminina. Sua fragrância combina delicadeza e sofisticação, sendo uma opção para diferentes momentos.',
      'Dolce Shine Eau de': 'O Perfume Dolce Shine apresenta uma fragrância luminosa, com caráter floral e frutado. Sua proposta é leve e alegre, ideal para quem gosta de aromas delicados.',
      'Gucci Bloom Eau de': 'O Perfume Gucci Bloom destaca um buquê de flores brancas em uma fragrância de personalidade floral. É uma opção para quem aprecia aromas envolventes e sofisticados.'
    };
    return descricoes[nome] ?? 'Conheça ' + this.traduzirNome(nome) + '. Confira a apresentação, a imagem e o preço deste produto em nossa loja.';
  }
}
