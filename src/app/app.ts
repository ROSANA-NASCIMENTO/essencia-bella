import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import {ProductList} from './components/product-list/product-list';


@Component({
  imports: [RouterOutlet, Header, ProductList, ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Essência Bella');
}
