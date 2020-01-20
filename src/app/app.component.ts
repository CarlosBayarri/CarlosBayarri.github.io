import { Component } from '@angular/core';
import { InfoService } from './services/info.service';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-angular';

  constructor( public infoService: InfoService, public productService: ProductsService) {

  }
}
