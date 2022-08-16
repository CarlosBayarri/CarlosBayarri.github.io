import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, public productService: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productService.searchProduct(params['term']);
    })
  }

}
