import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    ProductListComponent,
    CopyrightDirective,
    NumericDirective
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'proj';
}
