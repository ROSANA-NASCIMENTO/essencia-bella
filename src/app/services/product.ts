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

}
