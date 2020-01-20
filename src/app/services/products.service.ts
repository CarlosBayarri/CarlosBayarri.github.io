import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  loading = true;
  public products: Product[] = [];
  public productsFilter: Product[] = [];
  constructor(public http: HttpClient) { 
    this.loadProducts();
  }

  private loadProducts() {
    return new Promise((resolve, reject) => {
      this.http.get('https://portfolio-angular-902a9.firebaseio.com/products_idx.json').subscribe((res: Product[]) => {
        this.products = res;
        setTimeout(() => {
          resolve();
          this.loading = false;
        }, 1000);
      })
    });
    
  }
  public getProduct(id: string) {
    return this.http.get(`https://portfolio-angular-902a9.firebaseio.com/products/${id}.json`);
  }
  public searchProduct(term: string) {
    if (this.products.length === 0) {
      this.loadProducts().then( () => {
        this.filterProducts(term);
      });
    } else {
      this.filterProducts(term);
    }
    this.products.filter( product => {
      return true;
    })
  }
  private filterProducts( term: string) {
    this.productsFilter = [];
    term = term.toLocaleLowerCase();
    this.products.forEach(prod => {
      const title = prod.titulo.toLocaleLowerCase();
      const categoria = prod.categoria.toLocaleLowerCase();
      if (categoria.indexOf( term ) >= 0 || title.indexOf(term) >= 0) {
        this.productsFilter.push(prod);
      }
    })  
  }

}
