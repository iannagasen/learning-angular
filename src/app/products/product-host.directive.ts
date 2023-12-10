import { Directive, OnInit, ViewContainerRef } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { Product } from './product';

@Directive({
  selector: '[appProductHost]',
  standalone: true
})
export class ProductHostDirective implements OnInit {

  ngOnInit(): void {
    const productProperty: keyof ProductDetailsComponent = 'product'
    const product: Product = {
      name: 'Optical mouse',
      price: 130
    }

    const productRef = this.vc.createComponent(ProductDetailsComponent);
    productRef.setInput(productProperty, product);
  }


  constructor(private vc: ViewContainerRef) { }

}
