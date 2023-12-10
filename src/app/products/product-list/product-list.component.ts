import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { SortPipe } from '../sort.pipe';
import { ProductHostDirective } from '../product-host.directive';
import { PermissionDirective } from '../../permission.directive';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductDetailsComponent,
    SortPipe,
    ProductHostDirective,
    PermissionDirective
  ],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent 
  implements AfterViewInit {
  
  products: Product[] = [
    {
      name: 'Webcam',
      price: 100
    },
    {
      name: 'Microphone',
      price: 200
    },
    {
      name: 'Wireless Keyboard',
      price: 85
    }
  ]

  selectedProduct: Product | undefined;

  @ViewChild(ProductDetailsComponent) productDetails: ProductDetailsComponent | undefined;

  ngAfterViewInit(): void {
    if(this.productDetails) {
      console.log("ngAfterViewInit: " + this.productDetails.product?.name)
    }
  }


  setSelectedProduct(product: Product) {
    this.selectedProduct = product;
  }

  onBuy(product: Product) {
    window.alert(`You just bought ${product.name}`)
  }

  trackByProducts(index: number, name: string): string {
    return name
  }
}
