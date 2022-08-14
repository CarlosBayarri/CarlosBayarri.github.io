import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { ItemProduct } from 'src/app/interfaces/item-product.interface';
import { OpenprojectsService } from 'src/app/services/openprojects.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  public product: ItemProduct;
  id: string;
  constructor(private route: ActivatedRoute, public openprojectService: OpenprojectsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.openprojectService.getProduct(params['id']).subscribe((res: any) => {
        this.product = res[params['id']];
        this.id = params['id'];
      });
    });

  }

}
