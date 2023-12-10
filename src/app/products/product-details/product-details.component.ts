import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './product-details.component.html',
  // trigger change detection mechanism only when the reference of the 
  // name input property changes
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent
  implements OnInit, OnChanges {

  @Input() product: Product | undefined;
  @Output() bought = new EventEmitter<Product>();

  // this tracks the name input property for changes
  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue.name;
      const newValue = product.currentValue.name;
      console.log(`Product changed from ${oldValue} to ${newValue}`)
    }
  }

  ngOnInit(): void {
    console.log(`Name is ${this.product?.name} in the ngOnInit`)
  }
  

  buy() {
    this.bought.emit(this.product);
  }

  get productName(): string {
    console.log(`Get ${this.product?.name}`)
    return this.product?.name ?? '';
  }
}
